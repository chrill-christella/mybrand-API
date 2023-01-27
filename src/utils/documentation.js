import articleRouteDoc from "../../routes/article.doc";
import commentRouteDoc from "../../routes/comment.doc";
import messageRouteDoc from "../../routes/message.doc";
import userRouteDoc from "../../routes/user.doc";

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

  schemes: ["HTTP", "HTTPS"],
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
      name: "User",
      description: "",
    },
  ],

  components: {
    securitySchemes: {
      token: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },

  paths: {
    ...articleRouteDoc,
    ...messageRouteDoc,
    ...commentRouteDoc,
    ...userRouteDoc,
  },
};

export default swaggerDocumentations;
