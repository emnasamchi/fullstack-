import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { Logout, login } from "../../services/authServices";
import { useUser} from "../../stores/UserStore";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [setUser]=useUser((state)=>[state.setUser])
  const handleLogin = async () => {
    const res = await login(email, password);
    console.log(res)
    if(res?.data?.user) {
      setUser(res?.data?.user)
    }
  };
  // const handleLogout = () => {
  //   logout();
  //   setIsLoggedIn(false);
  // };

  return (
    <div className="flex w-72 flex-col items-end gap-6">
      <Input
        type="email"
        size="lg"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email@gmail"
      />
      <Input
        type="password"
        size="lg"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="*********"
      />


      <Button onClick={handleLogin}>Login</Button>
    
      <p >
        Don't have an account?{" "}
        <Link
          to="/register"
          
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
export default Login;
