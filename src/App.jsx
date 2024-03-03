import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/layouts/Home";
import Menu from "./components/layouts/Menu";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Auth } from "./services/Auth";
import Profile from "./components/user/Profile";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={
        
        <Auth>
        <Profile/> </Auth>} />


      </Routes>
    </>
  );
}

export default App;
