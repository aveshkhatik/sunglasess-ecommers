import React, { useContext } from "react";
import { StoreContext } from "../context and reducer/StoreContext";

const Product = ({ item }) => {
const {addToBasket} = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(item);
    console.log(item);
  };

  return (
    <div className="max-auto px-8 border border-grey-200 rounded-lg">
      <img src={item.image} alt="img" />
      <div className="flex flex-row items-center justify-between py-4">
        <div>
          <p className="text-xl">{item.name}</p>
          <p className="txt-lg">$ {item.price.toFixed(2)}</p>
        </div>
        <button
          className="bg-indigo-500 text-white text-lg font-medium rounded-full p-4"
          onClick={handleAdd}
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
