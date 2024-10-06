import banner from '../../assets/Rectangle 2.png'
import logo from '../../assets/logo.svg'
import { Div } from '../Hero/styles';

import instagram from '../../assets/instagram-round-svgrepo-com (1) 1.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'

import * as S from './styles'

const Footer = () => {
    return ( 
        <S.Image style={{ backgroundImage: `url(${banner})`}}>
            <Div>
                <img src={logo} alt="eFood" />

                <S.List>
                    <S.ListItem><img src={instagram} /></S.ListItem>
                    <S.ListItem><img src={facebook} /></S.ListItem>
                    <S.ListItem><img src={twitter} /></S.ListItem>
                </S.List>

                <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br />
                dos produtos é toda do estabelecimento contratado. 
                </p>
            </Div>
        </S.Image>
     );
}
 
export default Footer;