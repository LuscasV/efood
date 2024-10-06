

import Banner from "../../components/Banner"
import FoodList from "../../components/FoodList"
import Header from "../../components/Header"



const Restaurant = () => {
  
  return (
    <>
      <Header />
      <Banner />
      <div className="container">
      <FoodList />
      </div>
    </>
  )
}

export default Restaurant
