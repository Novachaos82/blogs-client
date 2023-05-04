import jwt_decode from "jwt-decode";

export const token = localStorage.getItem("secret_token");
export const decoded = jwt_decode(token);

export const userID = decoded.user._id;
