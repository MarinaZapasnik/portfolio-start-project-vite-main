
import React from "react";
import { Project } from "./Project";

import { S } from "./Projects_Styles";

type ProjectsPropsType = {
    name: string
    description: string
    src: string
    btnText?: string
}



export const ProjectsArea: React.FC<{ projects: Array<ProjectsPropsType> }> = (props: { projects: Array<ProjectsPropsType> }) => {
  return (
    <S.ProjectsWrapper>
        {props.projects.map((project, index) => (
            <Project
                key ={index}
                name={project.name}
                description={project.description}
                src={project.src}
                btnText={project.btnText}
      />
        ))}
      
    
    </S.ProjectsWrapper>
  );
};


