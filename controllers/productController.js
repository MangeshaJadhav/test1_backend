import productModel from "../models/productModel.js";
import slugify from "slugify";

//create the product
export const createProduct = async (req, res) => {
  try {
    const {
      productname,
      image,
      productcode,
      price,
      category,
      manufacturedate,
      expirydate,
      owner,
      status,
    } = req.body;

    //validation

    if (!productname) {
      return res.status(500).send({ error: "Name is Required" });
    }
    if (!image) {
      return res.status(500).send({ error: "Image is Required" });
    }
    if (!productcode) {
      return res.status(500).send({ error: "Product Code is Required" });
    }
    if (!price) {
      return res.status(500).send({ error: "Price is Required" });
    }
    if (!category) {
      return res.status(500).send({ error: "Category is Required" });
    }
    if (!manufacturedate) {
      return res.status(500).send({ error: "Manufacture Date is Required" });
    }
    if (!expirydate) {
      return res.status(500).send({ error: "Expiry date is Required" });
    }
    if (!owner) {
      return res.status(500).send({ error: "owner is Required" });
    }
    if (!status) {
      return res.status(500).send({ error: "status is Required" });
    }

    const products = new productModel({
      productname,
      image,
      productcode,
      price,
      category,
      manufacturedate,
      expirydate,
      owner,
      status,
    });

    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating product",
    });
  }
};

//get all the product
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .limit(3)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      counTotal: products.length,
      message: "ALlProducts ",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting products",
      error: error.message,
    });
  }
};

// search product
export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const resutls = await productModel.find({
      $or: [
        { productname: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
      ],
    });
    res.json(resutls);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In Search Product API",
      error,
    });
  }
};

//delete product
export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Product Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};

//update the product
export const updateProductController = async (req, res) => {
  try {
    const {
      productname,
      image,
      productcode,
      price,
      category,
      manufacturedate,
      expirydate,
      owner,
      status,
    } = req.body;

    //validation

    if (!productname) {
      return res.status(500).send({ error: "Name is Required" });
    }
    if (!image) {
      return res.status(500).send({ error: "Image is Required" });
    }
    if (!productcode) {
      return res.status(500).send({ error: "Product Code is Required" });
    }
    if (!price) {
      return res.status(500).send({ error: "Price is Required" });
    }
    if (!category) {
      return res.status(500).send({ error: "Category is Required" });
    }
    if (!manufacturedate) {
      return res.status(500).send({ error: "Manufacture Date is Required" });
    }
    if (!expirydate) {
      return res.status(500).send({ error: "Expiry date is Required" });
    }
    if (!owner) {
      return res.status(500).send({ error: "owner is Required" });
    }
    if (!status) {
      return res.status(500).send({ error: "status is Required" });
    }

    const products = await productModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body, slug: slugify(productname) },
      { new: true }
    );

    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Update product",
    });
  }
};
