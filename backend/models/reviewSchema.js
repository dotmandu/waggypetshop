const mongoose = require("mongoose");
const modelConfig = require("../config/modelConfig");


const Review = mongoose.model(
  "Review",
  new mongoose.Schema(
    {
      comment: {
        type: String,
        required: true,
      },

      rating: {
        type: String,
        required: true,
        min: 1,
        max: 5,
      },

      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    },
    modelConfig
  )
);
module.exports = Review;
