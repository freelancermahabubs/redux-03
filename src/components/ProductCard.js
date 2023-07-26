import React from "react";
import {BiListPlus} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/actionCreators/productActions";
import {RiDeleteBin2Fill} from "react-icons/ri";
import {useLocation} from "react-router-dom";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative"
      key={product._id}>
      {pathname.includes("cart") && (
        <div className=" grid place-items-center  bg-indigo-500 text-white h-8 w-8 rounded-full absolute top-2 right-2">
          <p> {product?.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return (
              <li key={feature} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart") && (
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() => dispatch(addToCart(product))}>
            Add to cart
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500   py-1 px-2 rounded-full"
            // onClick={() =>
            //   dispatch({type: actionTypes.ADD_TO_WISHLIST, payload: product})
            // }
          >
            <BiListPlus className="text-white" />
          </button>
        )}
        {pathname.includes("cart") && (
          <button
            className="bg-red-500 rounded-full w-full justify-center flex items-center gap-2 py-1 px-2  text-white text-bold"
            onClick={() => dispatch(removeFromCart(product))}>
            <RiDeleteBin2Fill />
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
