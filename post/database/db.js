import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const databaseInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { connectDB };
