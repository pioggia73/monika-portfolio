import React from 'react';
import Title from '../components/globals/Title';
import styled from 'styled-components';
import {PrimaryBtn} from '../components/globals/Buttons';
import {setTransition, setRem, setShadow, setColors, media} from '../styles';
import Section from '../components/globals/Section'

const Contact = ({className, props}) => {
    
    return (
        <Section className={className}>
        
            <Title  title = "contact me" center/>

                <form action = "https://formspree.io/webdevelopermonika@gmail.com"
                    method = "POST" className = "form-container"
                >
                    <div className = "form-group">
                        <input
                        type = "text"
                        name = "firstName"
                        id = "name"
                        className = "form-control"
                        placeholder = "full name" required
                        />
                        <label for= "name" className= "form-label">Full name</label>
                    </div>

                    <div className = "form-group">
                        <input
                        type = "email"
                        name = "email"
                        className = "form-control"
                        placeholder = "email address" required
                        />
                        <label for="email" className= "form-label">email address</label>
                    </div>

                    <div className = "form-group">
                        <textarea
                        name = "message"
                        className = "form-control"
                        row = "10"
                        placeholder = "your message here..." 
                        />
                    </div>

                    <div className = "form-group">
                       <PrimaryBtn 
                        t="2rem"
                        type = "submit"
                        value = "Send"
                        className = "form-button">
                        send
                        </PrimaryBtn>
                    </div> 
            </form>
    </Section> 
   
    )
};



export default styled (Contact)`

    .form-container {
        width: 80vw;
        margin: 0 auto;

        ${media.desktop` width: 50vw;
                    font-size: ${setRem(20)};
                    padding: ${setRem(20)} ${setRem(15)};          
        `};
    }

    .form-group {

        input,
        textarea {

            font-size: ${setRem(16)};
            padding: ${setRem(10)} ${setRem(30)};
            border-radius: ${setRem(2)};
            border: none;
            border-bottom: ${setRem(2)} solid ${setColors.mainGrey};
            display: block;
            width: 100%;

            &:focus {

                outline: none;
                border: none;
                border-bottom: ${setRem(2)} solid ${setColors.lightBlue};
                ${setShadow.light};     
            }

            &:focus:invalid {
                border-bottom: ${setRem(2)} solid ${setColors.primaryColor};
            }
        }
    }

    input:placeholder-shown + label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }

    label {
        font-size: ${setRem(12)};
        margin: ${setRem(10)} 0 0 ${setRem(35)};
        display: block;
        ${setTransition()};
    } 
`;