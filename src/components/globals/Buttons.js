import styled from "styled-components";
import {
  setColors,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition
} from "../../styles";

export const PrimaryBtn = styled.button`

  display: inline-block;
  background: ${setColors.primaryColor};
  color: ${setColors.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(15)} ${setRem(30)};
  ${setBorder({ color: setColors.primaryColor })};
  ${setLetterSpacing(3)};
  ${setTransition()};
  ${props =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}}`};
  text-decoration: none;
  cursor: pointer;

    &:hover {
      background: transparent;
      color: ${setColors.primaryColor};
    }
`;

export const SmallBtn = styled(PrimaryBtn)`

  padding: ${setRem(9)} ${setRem(10)};
  font-size: ${setRem(9)};

`;
