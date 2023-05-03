export const isLoggedIn = () => {
  const token = localStorage.getItem("secret_token");
  return token !== null;
};
