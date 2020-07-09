import React from 'react';
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import logo from '../images/logo.jpg';
import {setColors, setRem} from "../styles";

export default function Navbar() {
    return <ProductConsumer>
    
    {value => {
        const {handleSidebar} = value;

        return <NavWrapper>
            <div className="nav-center">
                <Link to = "/">
                    <img src = {logo} className = "logo" alt = "monika-logo"/>
                </Link>
                <FaBars className = "nav-icon" onClick = {handleSidebar}></FaBars>
            </div>
        </NavWrapper>
    }}
    </ProductConsumer>
}

const NavWrapper = styled.nav`

    position: sticky;
    top: 0;
    width: 100%;
    padding: ${setRem(10)} ${setRem(32)};
    background: ${setColors.lightBlue};
    z-index: 10;

    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        width: ${setRem(120)};
        height: 100%;
    }

    .nav-icon {
        font-size: ${setRem(30)};
        cursor: pointer;
        color: ${setColors.primaryColor};
    }
`;