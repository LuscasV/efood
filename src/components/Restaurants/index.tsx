
import star from '../../assets/estrela.svg'
import Button from '../Button';
import Tag from '../Tag';
import * as S from './styles'

type Props = {
  image: string
  tag: string[]
  title: string
  avaliation: string
  description: string
  id: number
}

const Restaurants = ({ title, image, tag, avaliation, description, id }: Props) => {
  return ( 
    <div>
      <S.Card className='container'>
      <img src={image} alt={title} />
      <S.Tags>
      {tag.map((info) => (<Tag key={info}>{info}</Tag>))}
      </S.Tags>
      <div>
      <S.Infos>
        <nav>
          <S.Links>
            <S.LinkItem>{title}</S.LinkItem>
          </S.Links>
        </nav>
          <S.Review>
          <S.Avaliation>{avaliation}</S.Avaliation>
          <img src={star} />
          </S.Review>
      </S.Infos>
        <S.Description>{description}</S.Description>
        <Button to={`/restaurant/${id}`}>Saiba mais</Button>
      </div>
    </S.Card>
    </div>
  );
}

export default Restaurants;
