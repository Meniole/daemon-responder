import { Context } from "../types";

export async function handleAutoResponse(context: Context) {
  const {
    logger,
    payload,
    config: { automatedResponses },
    commentHandler,
  } = context;

  const repo = payload.repository.name;
  const owner = payload.repository.owner.login;

  let autoResponse = automatedResponses[`${owner}/${repo}`];
  if (!autoResponse) {
    autoResponse = automatedResponses[repo];
  }

  if (!autoResponse) {
    autoResponse = automatedResponses[owner];
  }

  if (autoResponse) {
    await commentHandler.postComment(context, logger.warn(autoResponse, { owner, repo }));
  }
}
