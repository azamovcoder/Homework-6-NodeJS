import { Schema, model } from "mongoose";

import Joi from "joi";

const userSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: false,
    default: "",
  },

  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
    default: 0,
  },
  url: {
    type: String,
    required: false,
    default: "",
  },
  gender: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
});

export const Users = model("user", userSchema);

export const validationUser = (body) => {
  let schema = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string().allow(""),
    username: Joi.string().required(),
    password: Joi.string().required(),
    age: Joi.number().allow(0),
    url: Joi.string().allow(""),
    gender: Joi.string().required(),
    isActive: Joi.boolean(),
    budget: Joi.number().allow(0),
    role: Joi.string(),
  });
  return schema.validate(body);
};
