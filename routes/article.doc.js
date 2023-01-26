const listOfAllArticles = {
  tags: ["Articles"],
  description: "list of all blogs",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
          },
        },
      },
    },
  },
};

const articleRouteDoc = {
  "/api/article": {
    get: listOfAllArticles,
  },
};

export default articleRouteDoc;
