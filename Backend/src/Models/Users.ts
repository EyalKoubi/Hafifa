// import mongoose
import mongoose from "mongoose";

// export group schema
export const usersSchema = new mongoose.Schema({
  full_name: String,
  user_name: String,
  password: String,
  isAdmin: Boolean,
});
