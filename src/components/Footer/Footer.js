import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle> CALL </LinkTitle>
          <LinkItem href="tel:+40737421575">+40737421575</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> EMAIL </LinkTitle>
          <LinkItem href="emailto:marius.alexandru.olaru@gmail.com">marius.alexandru.olaru@gmail.com</LinkItem>
        </LinkColumn> */}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>HERE we GO!</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/AndromedaOMA">
          <AiFillGithub zise="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/marius-alexandru-olaru-390599229/">
          <AiFillLinkedin zise="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/marius._.23/">
          <AiFillInstagram zise="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
