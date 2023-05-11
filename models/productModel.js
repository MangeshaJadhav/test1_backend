import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    productcode: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    manufacturedate: {
      type: String,
      required: true,
    },
    expirydate: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("product", productSchema);
/*
type:String because it containe both name and number 
*/
