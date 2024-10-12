import styled from "styled-components";
import { breakpoints } from "../../styles";

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 80px;

    @media (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 1fr;
  }
`

export const Container = styled.div`
    margin-bottom: 120px;
`