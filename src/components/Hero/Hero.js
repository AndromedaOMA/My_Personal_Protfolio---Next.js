import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!<br/>
        Welcome to my<br/>
        personal portfolio!
      </SectionTitle>
      <SectionText>
        You're doing great! :)
      </SectionText>
      {/* <Button onClick={() => window.location = '/'}> Explore! </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;