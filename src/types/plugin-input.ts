import { StaticDecode, Type as T } from "@sinclair/typebox";

/**
 * This should contain the properties of the bot config
 * that are required for the plugin to function.
 *
 * The kernel will extract those and pass them to the plugin,
 * which are built into the context object from setup().
 */
export const pluginSettingsSchema = T.Object(
  {
    /**
     * `owner/repo`: `response`
     * `repo`: `response`
     * `owner`: `response`
     */
    automatedResponses: T.Record(T.String(), T.String(), {
      default: {
        "devpool-directory": "This is a no-reply repository, please visit the task using the link in the description.",
      },
    }),
  },
  { default: {} }
);

export type PluginSettings = StaticDecode<typeof pluginSettingsSchema>;
