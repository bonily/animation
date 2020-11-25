import React from 'react';
import styled, {keyframes} from 'styled-components';
import {MAX_WIDTH_DESCTOP} from '../const';

const menuItems = [`Главная`, `Наши клубы`, `Онлайн запись`, `Наша команда`];

const HeaderBlock = styled.header`
  display: flex;
  position: relative;

  max-width: ${MAX_WIDTH_DESCTOP};

  margin-right: auto;
  margin-left: auto;

  z-index: 1;
`;

const Img = styled.img`
  opacity: 0.7;
`;

const Ul = styled.ul`
  display: flex;
  position: relative;

  list-style: none;

  margin-left: auto;

  font-size: 18px;
`;

const liAnimation = keyframes `
  from: {
    top: -100%;
  }
  30% {
    top: 150%;
  }
  50% {
    top: 5%;
  }
  75% {
    top: 10%;
  }
  96% {
    top: 10%;
  }
  to {
    top: 10%;
  }
`;

const liColorAnimation = keyframes `
  from,
  75% {
  color: #BEBEBE;
  mix-blend-mode: difference;
  }
  80% {
    border-bottom: none;
  }
  99% {
    border-bottom: 2px solid black;
  }
  to {
    color: black:
    mix-blend-mode: normal;
    border-bottom: none;
  }
`;

// eslint-disable-next-line
const Li = styled.li<{delay: number}>`
  position: relative;
  top: -100%;

  max-height: 40px;

  margin-right: 15px;

  font-size: 2.5vh;
  text-transform: uppercase;
  font-weight: 600;

  animation: 2s ${liAnimation} ${({delay}) => delay + `s`} ease-in-out, 3s ${liColorAnimation} ${({delay}) => delay / 3 + `s`};
  animation-fill-mode: both;
`;

const buttonAnimation = keyframes `
  from {
    opacity: 0;
    transform: scale(0.2)
  },
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Button = styled.button`
  width: 45px;
  height: 45px;

  padding: 0;
  margin-top: 2vh;
  margin-right: 1vh;
  border-radius: 100%;
  border: none;

  background: url("./img/account.svg") no-repeat top;
  background-size: 35px 35px;
  animation: 1s ${buttonAnimation} 3.5s both;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Img src = "./img/logo.webp" width = "150px" height = "125px"/>
      <Ul>
        {
          menuItems.map((item, i) => {
            return (
              <Li key = {i} delay = {1 + i / 2}>{item}</Li>
            );
          })
        }
      </Ul>
      <Button></Button>

    </HeaderBlock>
  );
};

export default Header;
