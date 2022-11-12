import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    //atlastakiyle değiştir
    await mongoose.connect("mongodb://localhost/slackbot");
    console.log("db connection done");
  } catch (error) {
    console.log("an error occured with db connection");
  }
};
