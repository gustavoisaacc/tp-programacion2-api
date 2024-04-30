import express from "express";
import { connectedDB } from "./config/db.js";
import { routeProduct } from "./Routes/product.routes.js";

connectedDB();
export const app = express();
app.use(express.json());

//Routes
app.use("/api/v1", routeProduct);
