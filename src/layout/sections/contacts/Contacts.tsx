
import { SectionTitle } from "../../../components/SectionTitle"
import { Form } from "../../../components/form/Form"
import { Container } from "../../../components/Container"

import { FlexWrapper } from "../../../components/FlexWrapper"
import { S } from "./Contacts_Styles"
import React from "react"

import Typewriter from 'typewriter-effect';



const inputTitles = ['Name', 'Email', 'Message']

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <SectionTitle>Contact me</SectionTitle>
                    <Form formItems={inputTitles}/>
                    <S.Slogan>
                        
                        <Typewriter
                        options={{
                        strings: ['Front-End Developer in Progress', 'Available for Freelance'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                    </S.Slogan>
                </FlexWrapper>
                
            </Container>
            
            
        </S.Contacts>
        
    )
}

