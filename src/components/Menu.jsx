import { useContext } from 'react';
import { StoreContext } from '../components/StoreContext';
import FoodItem from '../components/MenuItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="mt-8" id="food-display">
            <h2 className="text-2xl sm:text-3xl font-semibold">Top Dishes near you</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {food_list.map((item, index) => {
                    // Filter items by category
                    if (category === "All" || category === item.category) {
                        return <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
