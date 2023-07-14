import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Techonologies</SectionTitle>
    <SectionText>I worked both with Web&Mobile technologies and with work on Arduino development boards - for robotics and ResberryPie - for CyberSecurity</SectionText>
    <List>
      <ListItem>
        <DiReact sie="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br/> React.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase sie="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br/> Next.js</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
