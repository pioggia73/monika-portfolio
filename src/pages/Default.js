import React from 'react';
import Hero from "../components/globals/Hero";
import {Link} from 'react-router-dom';
import defaultBcg from "../images/defaultBcg.jpg";
import Banner from "../components/globals/Banner";
//import Footer from '../components/Footer';
import {PrimaryBtn} from "../components/globals/Buttons";


export default function Default() {
    return (
        <>
            <Hero img = {defaultBcg} max = "true" >
            <Banner title="no page found" subtitle="404">
                <Link to='/'> 
                <PrimaryBtn t="1rem">back home</PrimaryBtn>
                </Link>
            </Banner>
            </Hero>
           
        </>
    )
}
