import React from 'react';
import Image from "next/image"
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';
import {HiArroeDown} from "react-icons/hi"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!<br/>
        Welcome to my<br/>
        personal portfolio!
      </SectionTitle>
      <SectionText>
        You're doing great!
      </SectionText>
      {/* <Button onClick={() => window.location = '/'}> Explore! </Button> */}
    </LeftSection>
    {/* <RightSection>
        <img clasName="rounded-full shadow-2xl" src="/malta.png" width={300} height={300}/>
    </RightSection> */}
  </Section>
);

export default Hero;