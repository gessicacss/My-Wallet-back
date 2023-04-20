import joi from 'joi';

const signInSchema = joi.object({
    email: joi.string().email().trim().required(),
    password: joi.string().required().min(3),
  });

  export default signInSchema;