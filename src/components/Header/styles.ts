import styled from "styled-components";
import { colors } from "../../styles";

export const Head = styled.div`
  width: 100%;
  background-color: ${colors.secondary};
  padding: 63px;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 900;

`

export const ListItem = styled.li`
  display: flex;

  img {
    width: 125px;
    height: 57px;
    margin-left: 58px;
  }
`