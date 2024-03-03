import { useEffect, useState, Suspense } from "react";
import { axiosClient } from "./authServices";
import { useNavigate } from "react-router-dom";
import { useUser } from "../stores/UserStore";
async function checkAuth(path) {
  try {
    await axiosClient.get(
      "/" + path,

      {
        withCredentials: true,
      }
    );
    return true;
  } catch (error) {
    console.log(error, "here");
    return false;
  }
}

export const Auth = ({ children }) => {
  const [setUser] = useUser((state) => [state.setUser]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null);

  const navigate = useNavigate();
  console.log("test");
  useEffect(() => {
    checkAuth("isadmin")
      .then((res) => console.log(res))
      .catch((err) => navigate("/login"));
  }, []);

  return children;
};
