import jwt_decode from "jwt-decode";

export const token = localStorage.getItem("secret_token");

export const decoded: decodedType | null =
  token !== null ? jwt_decode(token) : null;

console.log(decoded);
//export default decoded;

export const userID = decoded ? decoded?.user?._id : null;

console.log(userID);
