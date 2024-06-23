import React, { useState } from "react";
import { menuData } from "../data";
import { menu_list, food_list } from "../assets"; // Import both menu_list and food_list
import "./MenuDisplay.css";
import {fadeIn, staggerContainer} from "../variants"
import {motion} from 'framer-motion'

const Menu = () => {
  // Destructure menu data
  const { title, subtitle, modelImg } = menuData;

  // State for category selection
  const [category, setCategory] = useState("All");

  // Filter food items based on selected category
  const filteredFoodList =
    category === "All"
      ? food_list
      : food_list.filter(item => item.category === category);

  return (
    <section className="min-h-[780px]">
      {/* background */}
      <div className="h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0" />
      {/* text */}
      <div className="bg-blue-200 relative z-10 top-72 lg:top-52">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto flex flex-col items-center text-center"
        >
          <motion.h2 
            variants={fadeIn("down", "tween", 0.2, 1.6)}
          className="h2 capitalize text-white max-w-[400px] text-center">
            {title}
          </motion.h2>
       
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className="text-white/70 capitalize mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.div
          variants={fadeIn("down", "tween", 0.6, 1.6)} 
          >
            <img src={modelImg} alt="model" />
          </motion.div>
        </motion.div>
      </div>

      {/* Menu Gallery */}
      <div className="relative top-80 lg:top-66">
        <div className="container mx-auto">
          <div className="explore-menu-list">
            {menu_list.map((item, index) =>
              <div
                key={index}
                className="explore-menu-list-item"
                onClick={() =>
                  setCategory(
                    prev => (prev === item.menu_name ? "All" : item.menu_name)
                  )}
              >
                <img
                  className={`w-[80px] h-[80px] md:w-auto rounded-full ${category ===
                  item.menu_name
                    ? "active"
                    : ""}`}
                  src={item.menu_image}
                  alt={item.menu_name}
                />
                <p className="text-gray-600 mt-2">
                  {item.menu_name}
                </p>
              </div>
            )}
          </div>
          <hr />
        </div>

        <div className="food-display" id="food-display">
          <h2>Top dishes near you</h2>
          <div className="food-display-list">
            {filteredFoodList.map(item =>
              <div key={item._id} className="food-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="food-item-image"
                />
                <h3>
                  {item.name}
                </h3>
                <p>
                  {item.description}
                </p>
                <p>
                  ${item.price}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
