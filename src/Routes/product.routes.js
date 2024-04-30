import { Router } from "express";
import { ProductsController } from "../controllers/products.controlles.js";

export const routeProduct = Router();

routeProduct.get("/", ProductsController.fine);
routeProduct.get("/:id", ProductsController.fineById);
routeProduct.post("/", ProductsController.create);
routeProduct.put("/:id", ProductsController.update);
routeProduct.delete("/:id", ProductsController.delete);
