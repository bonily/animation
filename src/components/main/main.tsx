import React from 'react';
import styled, {keyframes} from 'styled-components';


// // eslint-disable-next-line
// const {bounceInRight} = require(`react-animations`);

// // eslint-disable-ndegext-line
// const {bounceInLeft} = require(`react-animations`);

// // eslint-disable-next-line
// const {rotateInDownLeft} = require(`react-animations`);

// const bounceInRightAnimation = keyframes`${bounceInRight}`;
// // const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

const tramsformAnimation = keyframes `
  from {
    bottom: 0;
    width: 100%;
    height: 0%;
  }
  25% {
    width: 100%;
    height: 50%;
  }
  50% {
    width: 10%;
    height: 100%;
  }
  75% {
    width: 100%;
    height: 100%;
    transform: translateX(0) skewX(0deg);
  }
  100% {
    width: 85%;
    height: 100%;
    transform: translateX(-64%) skewX(-16.2deg);
  }
  `;


const h1Animation = keyframes `
  from {
    left: -100%;
  }
  40% {
    left: -100%;
  }
  80% {
    left: 80%
  }
  to {
    left: 18%;
  }
`;

const H1 = styled.h1`
  display: block;
  position: relative;

  left: 30%;
  top: 40%;

  width: 20%;
  height: 15vh;

  margin: 0;

  font-family: Helvetica;
  font-size: 7vh;
  text-align: right;

  color: #BEBEBE;
  mix-blend-mode: difference;
  z-index: 3;
  animation: 3s ${h1Animation} ease-in-out;
  animation-fill-mode: both;


`;

const MainBlock = styled.main`
  position: relative;

  height: 100vh;

  margin-top: -125px;

  background: #F8F8F8;

  z-index: -1;
`;


const LeftDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #181818;
    z-index: 2;

    animation: 3s ${tramsformAnimation} ease-in-out;
    animation-fill-mode: both;
`;


const Main = () => {
  return (
    <MainBlock>
      <section style={{height: `100vh`}}>
        <H1>WAKE DIVISION</H1>
        <LeftDiv />
      </section>
    </MainBlock>
  );
};

export default Main;
