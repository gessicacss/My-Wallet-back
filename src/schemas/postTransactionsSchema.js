import joi from 'joi';

const postTransactionsSchema = joi.object({
    description: joi.string().trim().required(),
    amount: joi.number().positive().precision(2).strict().required(),
  });

  export default postTransactionsSchema;