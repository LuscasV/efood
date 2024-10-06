import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  padding: 4px 6px;
  color: ${colors.secondary};
  background-color: ${colors.primary};
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-decoration: none;
  cursor: pointer;
`