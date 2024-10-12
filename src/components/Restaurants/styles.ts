import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import { Link } from "react-router-dom";


export const Card = styled.div`
  max-width: 472px;
  height: 408px;
  border: 1px solid ${colors.primary};
  position: relative;
  display: block;

  @media (max-width: ${breakpoints.smartphone}) {
    width: 95%;
    height: 378px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    height: 396px;
  }
  
  img {
    width: 100%
  }

  div {
    margin-left: 8px;
    margin-right: 2px;
    margin-bottom: 8px;
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
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 20px;
  right: 16px;
`

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  color: ${colors.secondary};
  background-color: ${colors.primary};
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-decoration: none;
  margin-left: 8px;
  cursor: pointer;
`