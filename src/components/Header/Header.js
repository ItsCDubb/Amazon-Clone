import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
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
        <YoutubeSearchedForIcon className="header__searchIcon" />
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
            {/* Shopping cart icon */}
            <ShoppingCartSharpIcon />
            {/* Number of items in the cart */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
