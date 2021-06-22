import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Steven Tejeda <br />
          Software Engineer
        </SectionTitle>
        <SectionText>
        Specializing on building great digital experiences
        </SectionText>
        <form action="resume/Resume.pdf">
        <Button type="submit" onClick={props.handleClick} href="resume/Resume.pdf">Resume</Button>
        </form>
      </LeftSection>
    </Section>
  </>
);

export default Hero;