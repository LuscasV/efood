import banner from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'

import * as S from './styles'

const Hero = () => {
  return ( 
    <S.Image style={{ backgroundImage: `url(${banner})` }}>
      <S.Div>
        <img src={logo} alt="" />

        <h2>Viva experiências gastronômicas <br /> 
        no conforto da sua casa</h2>
      </S.Div>
    </S.Image>
  );
}

export default Hero;