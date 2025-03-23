import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"

import project1 from "../../../assets/images/project-1.webp"
import project2 from "../../../assets/images/project-2.webp"
import project3 from "../../../assets/images/project-3.webp"
import { ProjectsArea } from "../../../components/projects/ProjectsArea"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"


const projects = [
    {
      name: "Project 1",
      description: "This is a creative project using React and CSS.",
      src: project1,
      btnText: "View More",
    },
    {
      name: "Project 2",
      description: "An innovative styled-components design.",
      src: project2,
      btnText: "Details",
    },
    {
      name: "Project 3",
      description: "A modern JavaScript app featuring API integration.",
      src: project3,
      btnText: "Explore",
    },
  ];

export const Projects = () => {
    return (
        <StyledProjects>
          <Container>
            <FlexWrapper direction="column" align="center">
            
              <SectionTitle>
                  Projects
              </SectionTitle>
                      
              <ProjectsArea projects={projects}/>
            
            </FlexWrapper>
            
          </Container>
            
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBg};
    position: relative;
    
`
