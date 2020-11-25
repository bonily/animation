import React from 'react';
import styled, {keyframes} from 'styled-components';

const spotDivAnimation = keyframes `
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }

`;


const SpotNameDiv = styled.div`
  position: relative;
  opacity: 0;

  margin-right: 10%;
  margin-bottom: 5%;

  animation: 2s ${spotDivAnimation} 4.5s both;
`;


const H2 = styled.h2`
  margin: 0;

  font-size: 17vh;
  font-family: 'CANDARA';
  color: #B00710;
`;

const P = styled.p`
  position: absolute;
  left: 35%;
  top: 60%;

  margin: 0;

  font-size: 3vh;
  background: white;
  text-transform: uppercase;
`;

const Spot = () => {
  return (
    <SpotNameDiv>
      <H2>WD</H2>
      <P>Завидово</P>
    </SpotNameDiv>

  );
};

export default Spot;
