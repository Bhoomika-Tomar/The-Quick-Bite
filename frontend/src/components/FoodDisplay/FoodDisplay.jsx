import React, { useState, useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { assets } from '../../assets/assets';



const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [filterPrice, setFilterPrice] = useState(''); // State to manage price input

  

  // Filter the food list by category and price
  const filteredFoodList = food_list.filter((item) => {
    return (
      (category === 'All' || category === item.category) &&
      (filterPrice === '' || item.price <= parseFloat(filterPrice))
    );
  });

  return (
    <div className="food-display" id="food-display">


      {/* Input for price filter */}
      {category !== 'All' && (
        <div className="filter-price">
          <div className="input-container">
            <img src={assets.search_icon} alt="" />
            <input
              type="number"
              placeholder="Enter price to filter"
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
            />
          </div>
        </div>
      )}

      <h2>Top Dishes Near You</h2>

      <div className="food-display-list">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No items found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;