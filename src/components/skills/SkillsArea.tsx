
import { Skill } from "../../components/skills/Skill.tsx";

import { S } from "./Skills_Styles.ts";


export const SkillsArea: React.FC<{icons: Array<string>}> = (props: {icons: Array<string>}) => {
    return (
      
        <S.SkillsWrapper>
          {props.icons.map(icon => (
            
              <Skill 
                iconId={icon.split(' ').join('').toLowerCase()} 
                title={icon.toUpperCase()}/>

             

          ))}
        </S.SkillsWrapper>
     
    );


  };

  