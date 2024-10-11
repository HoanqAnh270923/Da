import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logo.scss";
import logo from "../../../assests/images/logo.svg"; // Cập nhật đường dẫn logo nếu cần

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo" onClick={() => navigate("/")}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
