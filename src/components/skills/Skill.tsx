
import { Icon } from "../icon/Icon"
import { theme } from "../../styles/Theme"

import { S } from "./Skills_Styles"
import React from "react"


type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            {props.iconId === 'styledcomponents'?
            (
                <Icon iconId={props.iconId} fill={theme.colors.accent}
                viewBox="0 0 120 120"/>
            ) :
            (
                <Icon iconId={props.iconId} fill={theme.colors.accent}/>  
            )}
        

        <S.SkillTitle>{props.title}</S.SkillTitle>
      </S.Skill>
    )
        
}
