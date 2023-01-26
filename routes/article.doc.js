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
      auth_token: [],
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
              description: "title of the blog",
              example: "Learning",
            },
            description: {
              type: "string",
              description: "description of the blog",
              example: "singing is the best practice",
            },
            image: {
              type: "string",
              description: "image of the blog",
              example:
                "/Users/Desktop/My Projects/server/src/images/1673612829382brand.PNG",
            },
            blogBody: {
              type: "string",
              description: "body of the blog",
              example: "eating is good",
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
              _id: "63ccde6635bde581af696708",
              title: "dancing",
              description:
                "dancing is a very good physical exercise for the dancer",
              image:
                "http://localhost:3001/images/1674370662518pexels-harry-dona-2338407.jpg",
              blogBody:
                "dancing makes most of the dancer feel good\ndancing makes most of the dancer feel gooddancing makes most of the dancer feel good\ndancing makes most of the dancer feel gooddancing makes most of the dancer feel good",
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
      auth_token: [],
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
            description: {
              type: "string",
              description: "Description of the blog",
              example: "Singing is the best practice",
            },
            image: {
              type: "string",
              description: "Image of the blog (url)",
              example:
                "http://localhost:5000/images/1674370662518pexels-harry-dona-2338407.jpg",
            },
            blogBody: {
              type: "string",
              description: "Body of the blog",
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
              description: {
                type: "string",
                description: "Description of the updated article",
              },
              image: {
                type: "string",
                description: "Image of the updated article (url)",
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
  security: [{ auth_token: [] }],
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
