import dotenv from "dotenv";
dotenv.config();

export const DATA_BASE =
  process.env.DATA_BASE || "mongodb://localhost:27017/producto";
