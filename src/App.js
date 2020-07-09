import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';

import Home from "./pages/Home";
import Default from "./pages/Default";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import CoursesPage from "../src/pages/CoursesPage";
import ContactPage from "../src/pages/ContactPage";
import PortfolioPage from "../src/pages/PortfolioPage"

import GlobalStyles from "./components/globals/GlobalStyles";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <GlobalStyles />
        <Navbar />
        <Sidebar />
        <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path= "/courses" component={CoursesPage} />
            <Route exact path= "/contact" component={ContactPage} />
            <Route exact path= "/portfolio" component={PortfolioPage} />
            <Route component = {Default} />
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
