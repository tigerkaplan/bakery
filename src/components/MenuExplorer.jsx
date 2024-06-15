import { menu_list } from '../data/menu_list';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="text-black font-medium">Explore our menu</h1>
      <p className="text-gray-700 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea amet dolor, excepturi voluptatum perferendis? Ipsa labore excepturi molestias illum.
      </p>
      <div className="flex justify-between items-center gap-8 overflow-x-auto">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? 'border-4 border-tomato p-2' : ''}`}
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}>
            <img
              className="w-20 h-20 cursor-pointer transition duration-300 rounded-full"
              src={item.menu_image}
              alt=""
            />
            <p className="text-gray-600 text-sm mt-2 cursor-pointer">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="my-4 border-t-2 border-gray-200" />
    </div>
  );
};

export default ExploreMenu;
