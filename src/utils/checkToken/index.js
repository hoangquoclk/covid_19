export const checkToken = () => {
  if (localStorage.getItem("auth")) {
    return localStorage.getItem("auth");
  }
  return null;
};
