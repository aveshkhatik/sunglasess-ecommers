import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context and reducer/StoreContext";

const Navbar = () => {

  const { product} = useContext(StoreContext)
  return (
    <>
      <h1 className="text-3xl text-center font-semibold mt-2 py-4">
        useContext + useReducer store
      </h1>
      <div className="flex flex-row justify-evenly mt-2 pt-2 text-lg font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/basket"}>Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">{product.length}</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
