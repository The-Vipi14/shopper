import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
// 1hr 35 minut
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className=" shop-category-indexSort">
        <div className="shop-category-sort">
          Sort by <img src={drop_down_icon} alt="" />
        </div>
      </div> 
      <div className="category-products">
        {all_product.map((item, i)=>{
          if (props.Category===item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            console.log("not")
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore more
      </div>
    </div> 
  );
};

export default ShopCategory;
