
import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {SmallBtn} from '../components/globals/Buttons';
import {setRem, setBorder, setTransition, media} from '../styles';

const Course = ({course, className})=> {

    return <ProductConsumer>
        {value => {

            const {text, path} = course;

            return  <li className={className}>
                        <div className="info">{text}</div>
                        <span>
                        <SmallBtn as="a" href={path}>view more</SmallBtn>
                        </span>
                    </li> 
        }}
    </ProductConsumer>
}

export default styled(Course)`
    
    display: flex;
    justify-content: space-between;
    line-height: 1.5rem;
    margin-bottom: ${setRem(-5)};
    padding: ${setRem(7)} ${setRem(18)};
    ${setBorder({width: '1px', color: '#e0e0e0'})};
    ${setTransition};
   

    &:hover {
        box-shadow: 0 14px 2px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        transform: scale(1.05);
    }

    .info {
        flex: 65%;
        padding: ${setRem(3)} ${setRem(5)}};
        font-size: ${setRem(13)};    
    }

    span {align-self: center};

    ${media.large`  width: 70vw;
                    font-size: ${setRem(20)};
                    padding: ${setRem(20)} ${setRem(15)};
        `
    };

`;

