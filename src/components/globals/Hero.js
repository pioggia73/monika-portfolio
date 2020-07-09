import styled from "styled-components";
import { setFlex, setBackground } from "../../styles";

const Hero = styled.header`

  min-height: ${props => props.max? '100vh' : '60vh'};
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,0)" })};
  ${setFlex()};
`;

export default Hero;
