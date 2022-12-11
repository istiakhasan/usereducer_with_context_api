import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
} from "../../redux/actionCreator/productAction";
import { ADD_TO_CART } from "../../redux/actions/actionsType";

const Home = () => {
  const [products, setProducts] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    fetch("./Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h5>{state?.cart?.length}</h5>
      {
        state?.cart?.sort((a,b)=>a.id-b.id).map(pd=>(<h1>{pd.title}</h1>))
      }
      <hr />
      {products?.map((pd) => (
        <>
          <button onClick={() => dispatch(addToCart(pd))}>{pd.title}</button>
          <button
            style={{ color: "red", fontWeight: "bold" }}
            onClick={() => dispatch(removeToCart(pd))}
          >
            {pd.title}
          </button>
        </>
      ))}
    </div>
  );
};

export default Home;
