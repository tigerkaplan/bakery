
import './FoodItem.css'

const FoodItem = ({id, name, price, description, image}) => {
    
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img className="food-item-image" src={image} alt={name}/>

        </div>
      <div className="food-item-info"></div>
    </div>
  )
}

export default FoodItem
