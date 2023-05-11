import express from "express";
import {
  createProduct,
  getProductController,
  searchProductController,
  deleteProductController,
  updateProductController,
} from "../controllers/productController.js";
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST//register controller is function and we call that from controller file
router.post("/createproduct", createProduct);

//get all the product
router.get("/getallproducts", getProductController);

//search the product
router.get("/search/:keyword", searchProductController);

//Delete the product
router.delete("/delete/:id", deleteProductController);

//update the product
router.put("/update/:id", updateProductController);

export default router;
