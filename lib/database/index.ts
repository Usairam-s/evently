import mongoose from "mongoose";

const MONGODB_URI = process.env.MONOGODB_URI;
// global type of mongoose
let catched = (global as any).mongoose || { conn: null, promise: null };

export const connecToDatabase = async () => {
  //check connect is already done
  if (catched.conn) {
    return catched.conn;
  }
  //check if have uri
  if (!MONGODB_URI) {
    throw new Error("Missing MongoDB URI");
  }

  catched.promise =
    catched.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  catched.conn = await catched.promise;

  return catched.conn;
};
