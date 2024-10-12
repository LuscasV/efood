import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import { Link } from "react-router-dom";

export const Head = styled.div`
  width: 100%;
  background-color: ${colors.secondary};
  padding: 63px;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
`

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;

  @media (max-width: ${breakpoints.smartphone}) {
    display: block;
  }

`

export const ListItem = styled.li`
  display: flex;

  img {
    width: 125px;
    height: 57px;
  }

  span {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    margin-bottom: 10px;
  }
`