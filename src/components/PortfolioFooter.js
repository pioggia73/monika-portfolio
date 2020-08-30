import React from 'react';
import styled from 'styled-components';
import { setRem } from '../styles';

const PortfolioFooter = ({skills, id, className }) => {

   return (
      <div className={className}>

      <div key={id} className= 'skills'>
         {skills.map(skill => <div>{skill}</div>)}
      </div>
      </div>
   )
};

export default styled(PortfolioFooter)`

.skills {
   display: flex;
   justify-content: space-evenly;
   padding: ${setRem(8)} ${setRem(26)};
}
`;
