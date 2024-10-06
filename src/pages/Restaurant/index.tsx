import { useParams } from "react-router-dom"

import Banner from "../../components/Banner"
import FoodList from "../../components/FoodList"
import Header from "../../components/Header"



const Restaurant = () => {

  const { id } = useParams()
  
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
