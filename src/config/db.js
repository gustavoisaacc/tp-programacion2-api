import mongoose from "mongoose";
import { DATA_BASE } from "./config.js";

export const connectedDB = async () => {
  try {
    const { connection } = await mongoose.connect(DATA_BASE);
    console.log(`${connection.host}:${connection.port}`);
  } catch (error) {
    console.log("error al conectarce a mongo");
    process.exit(1);
  }
};
