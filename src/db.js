import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jorgeNav:w9DGCX61hlQBgRRF@cluster0.qwzckmi.mongodb.net/merndb"
    );
    console.log(">>>>>db connected");
  } catch (error) {
    console.log(error);
    console.log("no pudo conectarse la db");
  }
};
