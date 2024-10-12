import styled from "styled-components";
import { breakpoints } from "../../styles";

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`