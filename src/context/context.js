import React, { Component } from 'react';
import {linkData} from './linkData';
import {socialData} from './socialData';
import {coursesData} from './coursesData';
import {portfolioData} from './portfolioData'

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sidebarOpen: false,
        links: linkData,
        socialData: socialData,
        courses: coursesData,
        projects: portfolioData,
    
    }
    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }

    render() {
        return (
        <ProductContext.Provider value = {{
            ...this.state,
            handleSidebar: this.handleSidebar}}>
        {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};