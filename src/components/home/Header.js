import React from "react";
import {Link} from 'react-router-dom';
import Hero from "../globals/Hero";
import homeImg from "../../images/HomeBcg.jpg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={homeImg} max>
      <Banner
        title="I am a web developer"
        subtitle="I make beautiful things"
      >
        <Link to="/contact"><PrimaryBtn t="1rem">contact me</PrimaryBtn></Link>
      </Banner>
    </Hero>
  );
};

export default Header;
