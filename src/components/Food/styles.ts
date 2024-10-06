import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 8px;
`

export const Title = styled.p`
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  padding: 4px 6px;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
`