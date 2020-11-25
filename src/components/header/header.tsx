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
  99% {
    top: 10%;
    color: #BEBEBE;
    mix-blend-mode: difference;
  }
  to {
    top: 10%;
    color: black:
    mix-blend-mode: normal;
  }
`;

// eslint-disable-next-line
const Li = styled.li<{delay: number}>`
  position: relative;
  top: -100%;

  margin-right: 15px;

  animation: 2s ${liAnimation} ease-in-out;
  animation-delay: ${({delay}) => delay + `s`};
  animation-fill-mode: both;


`;

const Button = styled.button`
  width: 45px;
  height: 45px;

  padding: 0;
  border-radius: 100%;

  background: url("./img/account.svg") no-repeat;
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
