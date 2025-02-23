import { handleAutoResponse } from "./handlers/auto-response";
import { Context } from "./types";
import { isCommentEvent } from "./types/typeguards";

export async function runPlugin(context: Context) {
  const { logger, eventName } = context;

  if (isCommentEvent(context)) {
    return await handleAutoResponse(context);
  }

  logger.info(`Ignoring event ${eventName}`);

  return Promise.resolve();
}
