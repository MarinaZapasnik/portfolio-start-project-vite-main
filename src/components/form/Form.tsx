

import { Button } from "../button/Button";

import React from "react";
import { S } from "./Form_Styles";

export const Form: React.FC<{ formItems: Array<string> }> = (props: { formItems: Array<string> }) => {
  return (
    <S.Form>
      {props.formItems.map(item => (
                    <S.FieldWrapper> 
                        <S.Label htmlFor={item.toLowerCase()}>
                            {item}
                        </S.Label>
                        {item === 'Message' ? 
                        (
                            <S.Field as="textarea" id={item.toLowerCase()} />
                        ) : 
                        (
                            <S.Field id={item.toLowerCase()} />
                        )}
                    </S.FieldWrapper>
                   
                ))} 
                <Button width="90px" hoverWidth="90px" type="submit">Send</Button>
    </S.Form>
  );
};

