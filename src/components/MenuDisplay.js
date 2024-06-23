import { useContext } from "react"
import {StoreContext} from "./StoreContext.js"
import './MenuDisplay.css'

const MenuDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className="food-display" id="food-display">
      <h2 className="text-2xl ">Top Dishes near you</h2>
      
    </div>
  )
}

export default MenuDisplay
