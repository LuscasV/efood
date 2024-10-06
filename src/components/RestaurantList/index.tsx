import Restaurants from "../Restaurants";
import Restaurant from '../../models'

import * as S from './styles'


export type Props = {
    restaurants: Restaurant[]
}



const RestaurantList = ({ restaurants }: Props) => {
    return ( 
        <S.Container className="container">
            <S.List>
                {restaurants.map((restaurant) => (
                    <Restaurants
                    key={restaurant.id} 
                    title={restaurant.title} 
                    image={restaurant.image}
                    tag={restaurant.tag}
                    avaliation={restaurant.avaliation}
                    description={restaurant.description}
                    id={restaurant.id}
                    />
                ))}
            </S.List>
        </S.Container>
     )
}
 
export default RestaurantList