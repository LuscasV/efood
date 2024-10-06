import * as S from './styles'

import restaurant from '../../assets/Banner La dolce vita trattoria.png'

const Banner = () => {
  return (
    <S.Card style={{ backgroundImage: `url(${restaurant})` }}>

      <div className='container'>
        <S.Tag>Italiana</S.Tag>
        <S.Title>La dolce Vita Trattoria</S.Title>
      </div>
    </S.Card>
  )
}

export default Banner
