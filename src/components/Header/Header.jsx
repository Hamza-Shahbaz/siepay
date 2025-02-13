import React from "react";

const Header = () => {
  return (
    <div className="p-4 flex flex-row justify-between">
      <div>
        <img src="./images/logo.png" alt="" />
        <p>Siepay</p>
      </div>
      <div className="flex flex-row space-x-8 text-2xl">
        <p>Home</p>
        <p>Personal</p>
        <p>Business</p>
        <p>About Us</p>
      </div>
      <div className="flex flex-row space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Login →
        </button>
      </div>
    </div>
  );
};

export default Header;
