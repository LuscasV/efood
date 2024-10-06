import styled from "styled-components";
import { colors } from "../../styles";
import { Button } from "../Button/styles";


export const Card = styled.div`
  max-width: 472px;
  border: 1px solid ${colors.primary};
  position: relative;
  display: block;
  
  img {
    width: 100%
  }

  div {
    margin-left: 8px;
    margin-right: 2px;
    margin-bottom: 8px;
  }

  ${ Button } {
    margin-left: 8px;
  }

`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 16px;
  color: ${colors.primary};

  img {
      width: 21px;
      display: flex;
      align-items: center;
    }
`
export const Links = styled.ul`
  display: flex;
`

export const LinkItem = styled.li`
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
    display: flex;
    align-items: center;
`

export const Review = styled.div`
  display: flex;
`


export const Avaliation = styled.span`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  align-items: center;
  margin-right: 8px;
`

export const Description = styled.div`
  color: ${colors.primary};
  font-size: 14px;
  line-height: 22px;
  margin-right: 8px;
  margin-bottom: 16px;
`

export const Tags = styled.div`
  position: absolute;
  top: 20px;
  right: 16px;
`