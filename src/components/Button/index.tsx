import * as S from './styles'

export type Props = {
  children: string
  to?: string
}

const Button = ({ children, to }: Props) => {
  return ( 
    <S.Button to={to as string} type="button">{children}</S.Button>
  );
}

export default Button;