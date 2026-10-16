import {access, readFile, readdir} from 'node:fs/promises';
import {dirname, isAbsolute, relative, resolve, sep} from 'node:path';
import {pathToFileURL} from 'node:url';

export function relativeMarkdownTargets(markdown) {
  const content = markdown.replace(/^\s*(\x60{3,}|~{3,})[^\n]*\n[\s\S]*?^\s*\1\s*$/gm, '');
  const targets = [];
  for (const match of content.matchAll(/!?\[[^\]]*\]\(\s*(?:<([^>]+)>|([^\s)]+))(?:\s+['"][^)]*)?\s*\)/g)) {
    targets.push(match[1] ?? match[2]);
  }
  for (const match of content.matchAll(/^\s*\[[^\]]+\]:\s*(?:<([^>]+)>|(\S+))/gm)) targets.push(match[1] ?? match[2]);
  return targets.filter((target) => target && !/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(target));
}

export async function validateSkillRoot(skillRoot) {
  skillRoot = resolve(skillRoot);
  let documents = 0;
  let links = 0;
  const issues = [];
  async function inspect(directory) {
    for (const entry of await readdir(directory, {withFileTypes: true})) {
      const path = resolve(directory, entry.name);
      if (entry.isSymbolicLink()) throw new Error('Skill bundles must not contain symlinks: ' + path);
      if (entry.isDirectory()) await inspect(path);
      else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        documents += 1;
        const markdown = await readFile(path, 'utf8');
        for (const target of relativeMarkdownTargets(markdown)) {
          links += 1;
          const clean = target.split(/[?#]/, 1)[0];
          if (!clean) continue;
          let decoded;
          try { decoded = decodeURIComponent(clean); } catch { issues.push({file: relative(skillRoot, path), target, reason: 'invalid URI encoding'}); continue; }
          const resolved = resolve(dirname(path), decoded);
          const rel = relative(skillRoot, resolved);
          if (isAbsolute(decoded) || rel === '..' || rel.startsWith('..' + sep) || isAbsolute(rel)) {
            issues.push({file: relative(skillRoot, path), target, reason: 'outside skill bundle'});
            continue;
          }
          try { await access(resolved); } catch { issues.push({file: relative(skillRoot, path), target, reason: 'file missing'}); }
        }
      }
    }
  }
  await inspect(skillRoot);
  return {skill: relative(dirname(skillRoot), skillRoot), documents, links, issues};
}

export async function validateSkillLinks(root = resolve('skills')) {
  root = resolve(root);
  const entries = await readdir(root, {withFileTypes: true});
  const single = entries.some((entry) => entry.isFile() && entry.name.toLowerCase() === 'skill.md');
  const roots = single ? [root] : entries.filter((entry) => entry.isDirectory()).map((entry) => resolve(root, entry.name));
  const results = [];
  for (const skillRoot of roots) results.push(await validateSkillRoot(skillRoot));
  const issues = results.flatMap((result) => result.issues.map((issue) => ({skill: result.skill, ...issue})));
  if (issues.length) throw new Error('Broken relative Skill links:\n' + issues.map((issue) => issue.skill + '/' + issue.file + ' -> ' + issue.target + ' (' + issue.reason + ')').join('\n'));
  if (!results.length) throw new Error('No Skill bundles found under ' + root);
  return {skills: results.length, documents: results.reduce((sum, item) => sum + item.documents, 0), links: results.reduce((sum, item) => sum + item.links, 0)};
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const result = await validateSkillLinks(process.argv[2]);
  process.stdout.write('Validated relative links: ' + JSON.stringify(result) + '\n');
}
