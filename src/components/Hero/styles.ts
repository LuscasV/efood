import styled from "styled-components";
import { colors } from "../../styles";


export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  margin-bottom: 80px;

  img {
    width: 125px;
    height: 57px;
    margin-top: 40px;
    margin-bottom: 180px;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 36px;
    line-height: 42px;
    font-weight: 900;
    color: ${colors.primary};
  }
`