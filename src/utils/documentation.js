import articleRouteDoc from "../../routes/article.doc";
import commentRouteDoc from "../../routes/comments.doc";
import messageRouteDoc from "../../routes/message.doc";

const swaggerDocumentations = {
  openapi: "3.0.0",
  info: {
    title: "My brand Api",
    Version: "0.1.0",
    description: "This is the backend of my BRAND",
  },
  servers: [
    {
      url: "http://localhost:3001",
      name: "development server",
    },
  ],

  components: {
    securitySchemes: {
      auth_token: {
        type: "apiKey",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "token",
        in: "header",
      },
    },
  },

  tags: [
    {
      name: "Articles",
      description: "",
    },

    {
      name: "Messages",
      description: "",
    },

    {
      name: "Comments",
      description: "",
    },
  ],

  paths: {
    ...articleRouteDoc,
    ...messageRouteDoc,
    ...commentRouteDoc,
  },
};

export default swaggerDocumentations;
