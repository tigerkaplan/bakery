import React, { useState } from "react";
import { menuData } from "../data";
import { menu_list, food_list } from "../assets"; // Import both menu_list and food_list
import "./MenuDisplay.css";
import { fadeIn, staggerContainer } from "../variants";
import { motion } from "framer-motion";

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
      <div className="bg-menu w-full max-w-[1800px] absolute -z-0" style={{ height: 'auto' }} />
      {/* text */}
      <div className="relative z-10 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="h2 capitalize  max-w-[400px] text-center"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className=" capitalize mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.div variants={fadeIn("down", "tween", 0.6, 1.6)}>
            <img src={modelImg} alt="model" />
          </motion.div>
        </motion.div>
      </div>

      {/* Menu Gallery */}
      <div className="relative py-10">
        <div className="container mx-auto text-center">
          <div className="explore-menu-list flex justify-center flex-wrap gap-4">
            {menu_list.map((item, index) => (
              <div
                key={index}
                className="explore-menu-list-item cursor-pointer"
                onClick={() =>
                  setCategory(
                    prev => (prev === item.menu_name ? "All" : item.menu_name)
                  )}
              >
                <img
                  className={`w-[80px] h-[80px] md:w-auto rounded-full ${category === item.menu_name ? "active" : ""}`}
                  src={item.menu_image}
                  alt={item.menu_name}
                />
                <p className="text-gray-600 mt-2">
                  {item.menu_name}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-8" />
        </div>

        <motion.div layout className="food-display" id="food-display">
          <div className="mx-auto grid max-w-screen-xl gap-6 p-6 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1">
            {filteredFoodList.map(item => (
              <div
                key={item._id}
                className="bg-white rounded-lg overflow-hidden shadow-lg ring-1 ring-dark ring-opacity-40 max-w-sm mx-auto"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full"
                />

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black ">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <p className="font-bold text-lg">
                    £{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
