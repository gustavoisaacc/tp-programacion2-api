import Product from "../models/product.model.js";

export class ProductsController {
  static async fine(req, res) {
    const products = await Product.find();
    res.status(200).json(products);
  }
  static async fineById(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  }
  static async create(req, res) {
    const data = req.body;
    const newProduct = await Product.create(data);

    res.status(201).json(newProduct);
  }
  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    const product = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.status(200).json(product);
  }
  static async delete(req, res) {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.status(200).json({ msg: "delete" });
  }
}
