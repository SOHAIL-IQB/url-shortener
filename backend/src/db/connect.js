const mongoose = require("mongoose");
require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;

const MONGODB_URL = process.env[`${NODE_ENV}_MONGODB_URL`];

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`Connected to ${NODE_ENV} MONGODB`);
  })
  .catch((err) => {
    console.log(
      `Error while connecting to ${NODE_ENV} MONGODB, with err - ${err}`
    );
  });
