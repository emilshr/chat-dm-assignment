import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL || "");
  } catch (error) {
    console.error(`Error while connecting to database ... ${error}`);
  }
};
