//logging in a user swagger documentation
const login = {
  tags: ["User"],
  description: "login user",
  requestBody: {
    content: {
      "Application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "email",
              description: "email of the user",
              example: "lavender@gmail.com",
            },
            password: {
              type: "string",
              description: "password of the user",
              example: "12345678",
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
          },
        },
      },
    },
  },
};

const userRouteDoc = {
  "/api/user/signin": {
    post: login,
  },
};

export default userRouteDoc;
