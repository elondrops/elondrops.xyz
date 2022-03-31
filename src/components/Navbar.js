import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as CloseIcon } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick((prev) => !prev);
  const closeHandler = () => setClick(false);

  const menuItems = [
    {
      title: "Home",
      url: "#",
      className: "nav-link",
    },
      {
          title: "Rarible.com",
          url: "https://rarible.com/elondrops",
          className: "nav-link",
      }
  ];

  return (
    <nav className="navbar">
        <a></a>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
      <ul className={click ? "nav_items active" : "nav_items"}>
        {menuItems.map((items, index) => {
          return (
            <li key={index}>
              <a
                onClick={closeHandler}
                className={items.className}
                href={items.url}
              >
                {items.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
