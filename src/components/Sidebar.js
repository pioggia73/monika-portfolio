import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {setColors, setTransition, setRem} from '../styles';


export default function Sidebar() {
    return <ProductConsumer>
        {value => {
            const {links, sidebarOpen, handleSidebar} = value;
            return (
                <SideWrapper show = {sidebarOpen}>
                <ul>
                   {links.map(link => {
                       return (
                           <li key = {link.id} className = "d-flex">
                           <Link to = {link.path} className = "sidebar-link" onClick = {handleSidebar}>{link.icon} {link.text}</Link>
                           </li>  
                       )
                   })}
                </ul>
            </SideWrapper>
            )
        }}
    </ProductConsumer>  
}

const SideWrapper = styled.nav`
    position: fixed;
    top: ${setRem(62)};
    left: 0;
    width: 100%;
    height: 100%;
    background: ${setColors.primaryColor};
    border-right: 2px solid ${setColors.lightBlue};
    z-index: 1;
    ${setTransition()};
   
    transform: ${props => (props.show ? "translateX(0)":"translateX(-100%)")};

    ul {
        list-style-type: none;
        padding:0 !important;
    }

    .sidebar-link {
        display: block;
        font-size: ${setRem(30)};
        color: ${setColors.lightBlue};
        text-transform: capitalize;
        padding: ${setRem(8)} ${setRem(24)};
        background: transparent;
        ${setTransition};
        position: relative;
        margin-bottom: ${setRem(8)};

        &:hover {
            color: ${setColors.mainWhite};
            text-decoration: none;
        }

        .link-icon {
            color: ${setColors.lightBlue};
            align-self: center;
            margin-right: ${setRem(16)};  
            ${setTransition};
        }

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 3px;
            background: ${setColors.lightBlue};
            transform: scaleY(0);
            transition: all .2s, width .4s ease-in-out .2s;
            z-index: -10;     
        } 
        
        &:hover::before {
            transform: scaleY(1);
            width: 100%;  
        }

        &:hover .link-icon {
            color: ${setColors.mainWhite};
        }
    }


@media (min-width: 576px) {
    width: 20rem;

    .sidebar-link:hover::before {
        width: 20rem;
    }
}
`;