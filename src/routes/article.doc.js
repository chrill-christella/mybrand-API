//get all blogs swagger documentation
const listOfAllArticles = {
  tags: ["Articles"],
  description: "list of all articles",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              _id: "63c5554511120c1b217b1d31",
              title: "eating is good",
              picture: "nothing",
              description: "niceeeeee",
              __v: 0,
            },
          },
        },
      },
    },
  },
};

//get single blog by id swagger documentation
const getonearticle = {
  tags: ["Articles"],
  summary: "get user by path id",
  description: "get single article by id",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "id of the user",
      type: "string",
      example: "hfbjsd2345njndfjhcbe3",
    },
  ],
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
    404: {
      description: "blog not found",
    },
  },
};
//create a blog swagger documentation

const createArticle = {
  tags: ["Articles"],
  description: "create a new article",
  security: [
    {
      token: [],
    },
  ],
  requestBody: {
    content: {
      "Application/json": {
        schema: {
          type: "object",
          properties: {
            title: {
              type: "string",
            },
            picture: {
              type: "string",
              format: "binary",
              description: "Picture",
            },
            description: {
              type: "string",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              status: "success",
              data: [],
            },
          },
        },
      },
    },
  },
};

//update blog swagger documentation
const updateArticle = {
  tags: ["Articles"],
  description: "Update an article",
  security: [
    {
      token: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "ID of the article to update",
      required: true,
      type: "string",
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Title of the blog",
              example: "Singing",
            },
            picture: {
              type: "string",
              format: "binary",
              description: "Picture",
            },
            description: {
              type: "string",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                description: "ID of the updated article",
              },
              title: {
                type: "string",
                description: "Title of the updated artcle",
              },
              picture: {
                type: "string",
                description: "Image of the updated article (url)",
              },
              description: {
                type: "string",
                description: "Description of the updated article",
              },
            },
          },
        },
      },
    },
  },
};

//delete a blog swagger documentation
const deleteArticle = {
  tags: ["Articles"],
  description: "Delete an article",
  security: [{ token: [] }],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "ID of the article to delete",
      required: true,
      type: "string",
    },
  ],
  responses: {
    204: {
      description: "No Content",
    },
    401: {
      description: "Unauthorized",
    },
    404: {
      description: "Not Found",
    },
  },
};

const articleRouteDoc = {
  "/api/article": {
    post: createArticle,
  },
  "/api/article/": {
    get: listOfAllArticles,
  },
  "/api/article/getOneArticle/{id}": {
    get: getonearticle,
  },

  "/api/article/update/{id}": {
    patch: updateArticle,
  },
  "/api/article/{id}": {
    delete: deleteArticle,
  },
};

export default articleRouteDoc;
