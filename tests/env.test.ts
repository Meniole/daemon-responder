import { Value } from "@sinclair/typebox/value";
import { pluginSettingsSchema } from "../src/types";

describe("pluginSettingsSchema", () => {
  it("should return an object with the default key and value", () => {
    const defaultValue = Value.Default(pluginSettingsSchema, {});
    expect(defaultValue).toEqual({
      automatedResponses: {
        "devpool-directory": "This is a no-reply repository, please visit the task using the link in the description.",
      },
    });
  });
});
