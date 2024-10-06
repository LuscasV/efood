import pizza from '../../assets/pizza margerita.png'
import * as S from './styles'

const Food = () => {
  return ( 
    <S.Card className='container'>
      <img src={pizza} alt="pizza" />
      <S.Title>Pizza Margerita</S.Title>
      <S.Description>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</S.Description>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Card>
   );
}
 
export default Food;