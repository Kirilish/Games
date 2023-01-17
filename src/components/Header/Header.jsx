import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="account">
        <AccountCircleIcon />
      </div>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
