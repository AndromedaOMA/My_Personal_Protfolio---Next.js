import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { SocialContainer } from '../Footer/FooterStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <legacyBehavior style={{ display: "flex", alignItems: "center", color: 'white',  marginBottom: '20' }}>
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </legacyBehavior>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialContainer>
        <SocialIcons href="https://github.com/AndromedaOMA">
          <AiFillGithub zise="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/marius-alexandru-olaru-390599229/">
          <AiFillLinkedin zise="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/marius._.23/">
          <AiFillInstagram zise="3rem"/>
        </SocialIcons>
      </SocialContainer>
    </Div3>
  </Container>
);

export default Header;
