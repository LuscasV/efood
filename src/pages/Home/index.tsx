
import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";
import Restaurant from "../../models";

import sushi from '../../assets/Hioki Sushi.png'
import ladolce from '../../assets/La Dolce Vita Trattoria.png'


const restaurant: Restaurant[] = [
    {
        id: 1,
        title: 'Hioki Sushi ',
        image: sushi,
        tag: ['Destaque da semana', 'Japonesa'],
        avaliation: '4.9',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        image: ladolce,
        tag: ['Italiana'],
        avaliation: '4.6',
        description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        image: ladolce,
        tag: ['Italiana'],
        avaliation: '4.6',
        description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        image: ladolce,
        tag: ['Italiana'],
        avaliation: '4.6',
        description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        image: ladolce,
        tag: ['Italiana'],
        avaliation: '4.6',
        description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        image: ladolce,
        tag: ['Italiana'],
        avaliation: '4.6',
        description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`
    },
]

const Home = () => {
    return ( 
        <>
        <Hero />
        <RestaurantList restaurants={restaurant}/>
        </>
    );
}

export default Home;