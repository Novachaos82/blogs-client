import jwt_decode from "jwt-decode";

export const token = localStorage.getItem("secret_token");

export const decoded = token !== null ? jwt_decode(token) : null;
//export default decoded;

export const userID = decoded ? decoded.user._id : null;
