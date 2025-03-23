
import { Button } from "../button/Button"
import { theme } from "../../styles/Theme"
import { Description } from "../Description"
import { S } from "./Projects_Styles"
import React from "react"




type ProjectPropsType = {
    name: string
    description: string
    src: string
    btnText?:string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project className="project">
            
                    <S.Image src={props.src} alt={props.name}></S.Image>
                    <S.DescriptionProjectWrapper>
                        <S.ProjectName>{props.name || "Project Name"}</S.ProjectName>
                        <Description>{props.description || "Project Description"}</Description>
                        <Button 
                                border="1px solid #25282b" 
                                borderRadius="24px"
                                padding="8px 24px"
                                width="150px"
                                background="none"
                                hoverBorder="none"
                                hoverWidth="150px"
                                hoverBackground={theme.colors.accent}>
                                {props.btnText || "View Project"}
                        </Button>
                    </S.DescriptionProjectWrapper>
                
            
            
            
        </S.Project>
    )
}

