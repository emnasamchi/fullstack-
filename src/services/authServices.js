import axios from "axios";
import toast from "react-hot-toast";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const register = async (username, email, password) => {
  try {
    return await axiosClient.post("/register", { username, email, password });

    toast.success("well registred");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
};

export const login = async (email, password) => {
  try {
    return await axiosClient.post(
      "/login",
      { email, password },
      { withCredentials: true }
    );

    toast.success("well loged in ");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
};
export const check = async (password) => {
  try {
    return await axiosClient.get("/check", { withCredentials: true });
  } catch (error) {
    console.log(error);
  }
};
export const Logout = async () => {
  return await axiosClient
    .get("/logout", {
      withCredentials: true,
    })
    .then(() => {
      Window.location.pathname = "/";
    });
  console.log(error);
};
export const testAdminRoute = async () => {
  return await axiosClient.get("/admin/admintest", {
    withCredentials: true,
  });
};
