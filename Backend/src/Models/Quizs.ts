// import mongoose
import mongoose from "mongoose";

// export group schema
export const quizsSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  options: {
    type: [String],
    validate: {
      validator: function (options: string[]) {
        return options.length === 4;
      },
      message: "options must contain exactly 4 elements",
    },
  },
  correct: {
    type: Number,
    min: 1,
    max: 4,
  },
});
