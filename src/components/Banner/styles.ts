import styled from "styled-components";

export const Card = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 56px;
  
  .container {
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    z-index: 1;
    top: 25px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

`

export const Tag = styled.span`
  font-size: 32px;
  line-height: 37px;
  font-weight: 100;
  color: #FFFFFF
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;
  margin-top: 156px;
  color: #FFFFFF
`
