import React from "react";
import { storeData } from "./Data";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <Navbar />
 
      <h2 className="text-4xl traking-wide py-4 pl-8">New In</h2>
      <div className="flex flex-col item-center gap-4 lg:grid lg:grid-cols-3 px-8">
        {storeData.map((item, i) => {
          return <Product key={i} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
