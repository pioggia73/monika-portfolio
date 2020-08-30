import React, { Component } from 'react';
// ****** components ***** //
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from '../error-boundry/error-boundry.styles';


class ErrorBoundary extends Component {

   constructor() {
      super();
      this.state = {
         hasError: false
      }
   }
   
   static getDerivedStateFromError(error) {
      
      return {
         hasError: true
      } 
   }
      componentDidCatch(error, info) {
         console.log(error)
   };

   render() {
      if (this.state.hasError === true) {
         return (
            <ErrorImageOverlay>
               <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
                  <ErrorImageText>Sorry, this page is broken</ErrorImageText>
            </ErrorImageOverlay>
         )
      }
      return this.props.children
   }
};

export default ErrorBoundary;

 
