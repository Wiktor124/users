import mongoose from "mongoose";

export const Users = mongoose.model('User', {
  name: { type: String, required: true, minLength: 1},
  // lastname: { type: String, required: true, minLength: 3},
})
