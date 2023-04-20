import joi from 'joi';

const signUpSchema = joi.object({
    name: joi.string().trim().required(),
    email: joi.string().email().trim().required(),
    password: joi.string().required().min(3),
  });

  export default signUpSchema;