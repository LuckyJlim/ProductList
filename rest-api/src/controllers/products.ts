import { Product } from '../models/products';

export const product_list = async (req, res) => {
  const offset = req.query.offset || 0;
  const limit = req.query.limit || 0;
  const products = await Product.findAll({offset,limit});
  const count = await Product.count();
  res.json({ count, results: products });
};