import styled from "styled-components";


import { SectionTitle } from "../../../components/SectionTitle";

import { SkillsArea } from "../../../components/skills/SkillsArea";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

const skills = [
  "VS Code",
  "JavaScript",
  "Html",
  "Css",
  "Figma",
  "GitHub",
  "Git",
  "React",
  "TypeScript",
  "Styled Components"
  
]

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsArea icons={skills}/>
      </Container>
      
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  position: relative;
  z-index:1;
  background-color: ${theme.colors.primaryBg};
`;
