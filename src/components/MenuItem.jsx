import { useContext } from 'react';
import { assets } from '../data';
import { StoreContext } from '../components/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="w-full m-2.5 p-2.5 rounded-lg shadow-md transition-all duration-300 animate-fadeIn">
            <div className="relative">
                <img className="w-full rounded-t-lg" src={image} alt={name} />
                {!cartItems[id] ? (
                    <img
                        className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt="Add"
                    />
                ) : (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-full bg-white">
                        <img
                            className="w-7.5"
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt="Remove"
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            className="w-7.5"
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt="Add"
                        />
                    </div>
                )}
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center mb-2.5">
                    <p className="text-lg font-medium">{name}</p>
                    <img className="w-17.5" src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="text-gray-500 text-xs">{description}</p>
                <p className="text-tomato text-xl font-medium my-2.5">£{price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
