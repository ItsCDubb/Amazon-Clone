import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        {/* Logo on the left -> img */}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Chris</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* Basket w/ Number */}
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                {/* Shopping basket icon */}
                <ShoppingBasketIcon />
                {/* Number of items in the basket */}
                <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
