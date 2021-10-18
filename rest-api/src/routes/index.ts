import express from 'express';
import * as productsController from '../controllers/products';

const router = express.Router();
const handleErrors = controller => {
  return (req, res, next) => {
    controller(req, res, next).catch(err => {
      next(err);
    });
  };
};

router.get('/products/', productsController.product_list);

export default router;
