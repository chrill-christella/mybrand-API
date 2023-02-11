import { StatusCodes } from "http-status-codes";
import { BadRequestHttpError } from "../../errors/badRequestHttpError";
import { createArticleSchema, updateArticleSchema } from "./article.schemas";

export const createArticleValidation = async (req, res, next) => {
  try {
    const values = await createArticleSchema.validate(req.body);
    if (values.error) {
      throw new BadRequestHttpError(
        StatusCodes.BAD_REQUEST,
        values.error.details[0].message
      );
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

export const updateArticleValidation = async (req, res, next) => {
  try {
    const values = await updateArticleSchema.validate(req.body);
    if (values.error) {
      throw new BadRequestHttpError(
        StatusCodes.BAD_REQUEST,
        values.error.details[0].message
      );
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
