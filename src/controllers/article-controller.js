import Article from "../models/articles-model";
import { deleteFile, uploadFile } from "../utils/cloudinaryService";
import { StatusCodes } from "http-status-codes";

async function createArticle(req, res, next) {
  try {
    req.body.picture = await uploadFile(req, res, next);
    const createdArticle = await Article.create({
      ...req.body,
      comments: undefined,
    });
    res.status(201).json({
      status: 201,
      message: "Article created successfully",
      articleID: createdArticle._id,
      data: createdArticle,
    });
  } catch (error) {
    next(error);
  }
}

async function getArticle(req, res, next) {
  try {
    const article = await Article.findById({ _id: req.params.id });
    if (!article) {
      throw new NotFoundHttpError(StatusCodes.NOT_FOUND, "Article Not found");
    }
    res.status(200).json({
      status: 200,
      message: "Article retrieved successfully",
      payload: article,
    });
  } catch (error) {
    next(error);
  }
}

async function getAllArticle(req, res, next) {
  try {
    const articles = await Article.find();
    res.status(200).json({
      status: 200,
      message: "All Articles retrieved successfully",
      data: articles,
    });
  } catch (error) {
    next(error);
  }
}

async function updateArticle(req, res, next) {
  try {
    const article = await Article.findOne({ _id: req.params.id });
    if (!article) {
      throw new NotFoundHttpError(StatusCodes.NOT_FOUND, "Article Not found");
    }
    if (req.file.path) {
      req.body.picture = await uploadFile(req, res, next);
      await deleteFile(article.picture);
    }
    await Article.updateOne(
      { _id: article._id },
      {
        ...req.body,
      }
    );
    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Article updated successfully",
      payload: null,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteArticle(req, res, next) {
  try {
    const article = await Article.findOne({ _id: req.params.id });
    if (!article) {
      throw new NotFoundHttpError(StatusCodes.NOT_FOUND, "Article Not found");
    }
    await Article.deleteOne({ _id: article._id });
    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Article deleted successfully",
      payload: null,
    });
  } catch (err) {
    next(err);
  }
}

export {
  createArticle,
  getAllArticle,
  getArticle,
  updateArticle,
  deleteArticle,
};
