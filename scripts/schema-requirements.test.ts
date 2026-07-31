import {describe, expect, it} from "vitest";
import {
  describeInputRequirement,
  satisfiesRequiredAlternatives,
} from "./schema-requirements.mjs";

const schema = {
  anyOf: [
    {required: ["comment_id", "url"]},
    {required: ["expansion_token", "feedback_id"]},
  ],
};

describe("schema requirement alternatives", () => {
  it("requires every field in at least one alternative group", () => {
    expect(satisfiesRequiredAlternatives(schema, {url: "post"})).toBe(false);
    expect(satisfiesRequiredAlternatives(schema, {url: "post", comment_id: "comment"})).toBe(true);
    expect(satisfiesRequiredAlternatives(schema, {
      feedback_id: "feedback",
      expansion_token: "token",
    })).toBe(true);
  });

  it("describes grouped choices without flattening them", () => {
    expect(describeInputRequirement(schema)).toBe(
      "one of: comment_id + url; expansion_token + feedback_id",
    );
  });
});
