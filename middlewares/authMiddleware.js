//to secure the acces routes login
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base//middleware contain next i.e req then next validate then res send happen
//by using next to validate the user
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode; //here we pass the decode in user and decrypt here
    next();
  } catch (error) {
    console.log(error);
  }
};
