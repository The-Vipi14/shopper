import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
// import all_product from "../Assets/all_product";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cart-item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0)
             {
                return <div>
                   <div className="cart-item-format cart-item-format-main">
                   <img className="cart-icon-product-icon" src={e.image} alt="" />
                   <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cart-item-quantity">{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img className="cart-item-remove-icon" src={remove_icon} onClick={() =>{removeFromCart(e.id)}} alt="" />
                    </div>
                <hr />
            </div>
        }
        return null;
      })}
      <div className="cart-item-down">
        <div className="cart-item-total">
            <h1>cart total</h1>
            <div>
                <div className="cart-item-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div  >
                <hr />
                <div className="cart-item-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div> 
                <hr />
                <div className="cart-item-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-item-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cart-item-promo-box">
                <input type="text" name="" id=""  placeholder="promo code "/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
