import React from "react";
import {useProducts} from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  // const {
  //   state: {wishlist, loading, error},
  // } = useProducts();

  // let content;

  // if (loading) {
  //   content = <p>Loading</p>;
  // }

  // if (error) {
  //   content = <p>Something went wrong</p>;
  // }

  // if (!loading && !error && wishlist.length === 0) {
  //   content = <p>Nothing to show, product list is empty</p>;
  // }

  // if (!loading && !error && wishlist.length) {
  //   content = wishlist
  //     .filter((product) => product.rating >= 4)
  //     .map((product, i) => <ProductCard key={i} product={product} i={i} />);
  // }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {/* {content} */}
      </div>
    </div>
  );
};

export default Wishlist;
