import { User } from "../model/user.model.js";

const makeAccount = async (req, res) => {
  try {
    const { username, emailId, password } = req.body;
    if (!emailId.includes("@")) {
      return res.status(404).json({ message: "Inavlid emailId." });
    }
    if ([username, emailId, password].some((field) => field.trim() === "")) {
      return res.status(404).json({ message: "Provide all the fields." });
    }
    const existingUser = await User.findOne({
      $or: [{ emailId: emailId }, { username: username }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists with this emailId or username.",
      });
    }
    const user = await User.create({
      username: username,
      emailId: emailId,
      password: password,
    });
    return res.status(200).json({ message: "Account created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error occured while registering user.",
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    return res.status(404).json({ message: "Invalid password." });
  }
  user.accessToken = await user.generateAccessToken();
  await user.save();
  const options = {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "none",
  };
  return res
    .status(200)
    .cookie("accessToken", user.accessToken, options)
    .json({ message: "logged In successfully." });
};

const logoutUser = async (req, res) => {
  const userId = req.user?._id;
  const user = await User.findById(userId);
  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found with this accessToken." });
  }
  user.accessToken = null;
  user.save();
  const options = {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "none",
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .json({ message: "logged Out successfully." });
};

export { makeAccount, loginUser, logoutUser };
