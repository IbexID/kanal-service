import React from "react";

const Header = ({ isAuth, logOut, username }) => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      {isAuth && (
        <div className="header__controls">
            <p className="header__username">{username}</p>
          <button
            className="header__exit-button"
            onClick={(e) => {
              e.preventDefault();
              logOut();
            }}
          >
            <img
              src={require("../images/exit-button.svg").default}
              alt="exit"
            />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
