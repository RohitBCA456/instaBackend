import { Post } from "../model/post.model";
import { subscribeToQueue } from "../service/RabbitMQ";

const savePostToDataBase = async (req, res) => {
  subscribeToQueue("post", (data) => {
    const userId = data.userId;
    const postURL = data.post;

    const post = Post.create({
      userId,
      postURL,
    });
    if (!post) {
      return res.status(404).json({ message: "PostURL not saved." });
    }
    return res.status(200).json({ message: "PostURL saved successfully." });
  });
};

export { savePostToDataBase };