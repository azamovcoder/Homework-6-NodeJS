import { Schema, model } from "mongoose";

import Joi from "joi";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export const Blogs = model("blog", blogSchema);

export const validateBlog = (body) => {
  let schema = Joi.object({
    title: Joi.string().required(),
    desc: Joi.string().required(),
    userId: Joi.string().required(),
  });
  return schema.validate(body);
};
