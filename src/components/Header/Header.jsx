import React from "react";
import Button from "../UI/Button";

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
        <Button text={"Login →"} styles={"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 "}/>
      </div>
    </div>
  );
};

export default Header;
