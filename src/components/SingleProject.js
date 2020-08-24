import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {setRem, setColors, setLetterSpacing, setTransition, setShadow} from '../styles';
import {SmallBtn} from '../components/globals/Buttons';
import PortfolioFooter from '../components/PortfolioFooter';

const SingleProject = ({project, className}) => {

    return <ProductConsumer>
    
        {value => 
            {const {img = '', name ='', sourcePath, pagePath, skills } = project
        
                return <article className={className}>
                    <div className="img-container">
                        <img src={img} alt={name}/>
                        <SmallBtn as="a" href={pagePath} className="path-btn">view page</SmallBtn>
                    </div>
                   
                    <div className="info-container">
                        <h6>{name}</h6>
                        <SmallBtn as="a" href={sourcePath}>view source</SmallBtn>
                    </div>
                    <PortfolioFooter skills={skills}/>
                   
                </article>
        }}
    </ProductConsumer>
};

export default styled(SingleProject)`

    background: ${setColors.mainWhite};
    margin: ${setRem(16)} 0;

    .img-container {
        background: ${setColors.mainBlack};
        position: relative;
        overflow: hidden;
        
        img { 
            width: 100%;
            display: block;
            ${setTransition};   
        }

        &:hover img {
            opacity: .3;
            transform: scale(1.1);  
        }

        .path-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            ${setTransition};
        }

        &:hover .path-btn {
            opacity: 1;
        }
    }

    .info-container {
        display: flex;
        justify-content: space-between;
        background: ${setColors.lightBlue};
        padding: ${setRem(10)} ${setRem(8)}};
        
        h6 {
            ${setLetterSpacing()};
            color: ${setColors.mainWhite};
            align-self: center;
        }
    }

    .skills-container {
        font-size: ${setRem(15)};
        padding: ${setRem(10)};
        display: flex;
        justify-content: space-around;
        background: ${setColors.primaryColor};
        color: ${setColors.mainWhite};
        width: 100%; 
    };

    ${setShadow.light};
    ${setTransition()};

    &:hover {
        ${setShadow.dark};
    } 
`;