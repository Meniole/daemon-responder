import { Context } from "../types";

export async function handleAutoResponse(context: Context) {
  const {
    logger,
    payload: { repository },
    config: { automatedResponses },
    commentHandler,
  } = context;
  const repo = repository.name;
  const owner = repository.owner.login;
  const autoResponse = automatedResponses[`${owner}/${repo}`] || automatedResponses[owner] || automatedResponses[repo];

  if (autoResponse) {
    await commentHandler.postComment(context, logger.warn(autoResponse, { owner, repo }));
  }
}
