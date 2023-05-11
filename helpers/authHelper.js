import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
//here we create the hash function for password security
/**
 * here we create two function and here we recieve plain password
 * and return the has password with help of props method
 *here salt round is just number of time that salt take round for hash to make strong
 bcryt contain that hash method default
 
 */
