import React from 'react';
import styled from 'styled-components';
import {setColors, setRem, setTransition, media} from '../../styles';
import {ProductConsumer} from '../../context' ;

const Footer = ({className})  => {

    return <ProductConsumer>

        {value => {

            const {socialData} = value

            return <footer className = {className}>

                <div className="footer-info">
                    <p>copyright&copy; monika {new Date().getFullYear()}. all rights reserved.
                    created with React.</p>
                </div>

                <div className="footer-icons">
                    {socialData.map(item => 
                        <a key={item.id} href={item.url} className="icon">{item.icon}</a>)}
                </div>
            </footer>
        }}
    </ProductConsumer>
}


export default styled(Footer)`

    background: ${setColors.mainBlack};
    display: flex;
    justify-content: space-between;
    padding: ${setRem(15)} ${setRem(25)};

     ${media.desktop `padding:${setRem(15)} ${setRem(15)};`};

    .footer-info {
        align-self: center;

        p {
            color: ${setColors.mainGrey};
            text-transform: capitalize;
            font-size: ${setRem(13)}; 
            
            ${media.desktop `font-size: ${setRem(17)};`};
        }  
    }

    .footer-icons {
        display: flex;

       .icon {
           color: ${setColors.lightGrey};
           font-size: ${setRem(20)};
           padding: ${setRem(16)};
           align-self: center;
           ${setTransition};

           &:hover {color: ${setColors.primaryColor};}
       }
    }
`;