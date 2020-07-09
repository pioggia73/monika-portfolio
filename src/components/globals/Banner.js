import React from "react";
import styled, { css, keyframes } from "styled-components";
import {
  setColors,
  setRem,
  setLetterSpacing,
  setBorder,
  media
} from "../../styles";

const fadeIn = (start, point, end) => {
  const animation = keyframes`
0%{
 opacity:0;
 transform:translateY(${start})
}
50%{
 opacity:0.5;
 transform:translateY(${point})
}
100%{
 opacity:1;
 transform:translateY(${end})
}
`;

  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};

const Banner = ({ className, title, subtitle, children }) => {

  return (
    <div className={className}>
      <h1>
        {title}
      </h1>
      <div className="info">
        <h2>{subtitle}</h2>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  ${setLetterSpacing(3)}
  color: ${setColors.mainWhite};

  h1 {
    text-transform: capitalize;
    color: ${setColors.primaryColor};
    ${fadeIn("100%", "-10%", "0")}
  }
  
  ${media.tablet` width: 70vw;
    ${setBorder({ width: "6px", color: setColors.primaryColor })};
   `}
   
  .info {
      ${fadeIn("-100%", "10%", "0")}
  }
`;
export default BannerWrapper;
