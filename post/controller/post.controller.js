import { Post } from "../model/post.model.js";
import { subscribeToQueue } from "../service/RabbitMQ.js";

const savePostToDataBase = async (req, res) => {
  subscribeToQueue("post", async (data) => {
    try {
      const parsedData = JSON.parse(data);
      const userId = parsedData.userId;
      const postURL = parsedData.post;

      if (!userId || !postURL) {
        console.error("Missing fields:", { userId, postURL });
        return; // Or handle the error appropriately
      }

      const post = await Post.create({ userId, postURL });
      console.log("Post saved to DB:", post);
      return;
    } catch (err) {
      console.error("Error processing message:", err.message);
    }
  });
};


export { savePostToDataBase };