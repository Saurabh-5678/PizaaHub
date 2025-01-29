import React, { useState } from "react";
import pizzas from "../pizaaData";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

import Modal from "react-bootstrap/Modal";

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVarient] = useState("Small");
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
 


  function addtoCart(){
    dispatch(addToCart(pizza,quantity,variant))
  }
  // const addtoCart=(pizza, quantity, variant)=>(dispatch)=>{
  //       // dispatch(addToCart(pizza,quantity,variant))  
  //       if (!pizza) {
  //         console.error("Pizza object is undefined or null");
  //         return;
  //     }
  
  //     console.log("Pizza object:", pizza);
  
  //     if (!pizza.prices || !pizza.prices[0]) {
  //         console.error("Pizza object does not have valid prices", {
  //             pizza,
  //         });
  //         return;
  //     }
  
  //     console.log("Pizza prices:", pizza.prices);
  
  //     if (!pizza.prices[0][variant]) {
  //         console.error(`Variant '${variant}' not found in pizza prices`, {
  //             pizza,
  //             variant,
  //         });
  //         return;
  //     }
  
  //     const cartItem = {
  //         name: pizza.name,
  //         _id: pizza._id,
  //         image: pizza.image,
  //         variant: variant,
  //         quantity: quantity,
  //         prices: pizza.prices,
  //         price: pizza.prices[0][variant] * quantity,
  //     };
  
  //     console.log("Cart item:", cartItem);
  
  //     dispatch(addToCart(pizza,quantity,variant)) 
  // }

  return (
    <div
      style={{ margin: "50px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
          alt="no pics"
        ></img>
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.variants.map((variants) => {
              return <option value={variants}>{variants}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price : {pizzas.prices && pizzas.prices.length > 0 && pizzas.prices[0][variant] * quantity} Rs/-
            
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtoCart}>ADD TO CART</button>
        </div>
      </div>

      <div>
      {/* model */}
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img className='img-fluid' src={pizza.image}  style={{height:'300px', width:'350px'}} alt="no pic"/>
            <p>{pizza.description}</p>
            
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
