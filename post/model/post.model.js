import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
          userId: {
                    type: String, 
                    required: true,
          },
          postURL: {
                    type: String, 
                    required: true,
          }
}, {timestamps: true})

export const Post = mongoose.model("Post", postSchema);