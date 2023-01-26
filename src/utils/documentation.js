import articleRouteDoc from "../../routes/article.doc";

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

  tags: [
    {
      name: "Articles",
      description: "",
    },
  ],

  paths: {
    ...articleRouteDoc,
  },
};

export default swaggerDocumentations;
