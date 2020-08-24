import React, { lazy, Component, Suspense } from "react";
import {Route, Switch} from 'react-router-dom';

import Default from "./pages/Default";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import GlobalStyles from "./components/globals/GlobalStyles";

const Home = lazy(() => import('./pages/Home'));
const CoursesPage = lazy(() => import('../src/pages/CoursesPage'));
const ContactPage = lazy(() => import('../src/pages/ContactPage'));
const PortfolioPage = lazy(() => import('../src/pages/PortfolioPage'));


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Navbar />
        <Sidebar />
        <Switch>
            <Suspense fallback={<div>...Loading </div>}>
              <Route exact path= "/" component={Home} />
              <Route exact path= "/courses" component={CoursesPage} />
              <Route exact path= "/contact" component={ContactPage} />
              <Route exact path= "/portfolio" component={PortfolioPage} />
            </Suspense>
              <Route component = {Default} />
        </Switch>
      </React.Fragment>  
    );
  }
};

export default App;
