import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import styles from '../styles/index';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, navVariants } from './HeaderStyles';
import { SocialContainer } from '../Footer/FooterStyles';


const Header = () =>  (
  <Container
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w[50%] inset-0 gradient-01" />
    <Div1>
      <Link href="/">
        <legacyBehavior style={{ display: "flex", alignItems: "center", color: 'white',  marginBottom: '20' }}>
<<<<<<< HEAD
           {/* <DiCssdeck size="3rem" /> */}
=======
          <DiCssdeck size="3rem" />
>>>>>>> a809b22feeef00dcaf2b4007853ea0807fdf6ac4
          <Span>MyPortfolio</Span>
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
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/marius-alexandru-olaru-390599229/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/marius._.23/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialContainer>
    </Div3>
  </Container>
);

export default Header;
