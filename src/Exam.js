import React, { useEffect } from "react";
import { actionType } from "./action/productAction";
import { useProductContext } from "./context/ProductContext";

const Exam = () => {
  const { state, dispatch } = useProductContext();
  useEffect(() => {
    dispatch({ action: actionType.FEATCHING_START });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionType.FEATCHING_SUCCESS, payload: data })
      );
  }, []);
  console.log(state);
  return (
    <div>
      {state?.product?.map((pd) => (
        <div style={{display:"flex"}}>
          <li>{pd.title}</li>
          <button onClick={()=>dispatch({type:actionType.ADD_TO_CART,payload:pd})}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Exam;
