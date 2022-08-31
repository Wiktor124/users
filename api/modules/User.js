import mongoose from "mongoose";

export const Users = mongoose.model('User', {
  name: { type: String, minLength: 1}
})
