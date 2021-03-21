import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

export type InputContainerProps = {
    required: boolean;
}

const InputContainerS = styled.div`
     position: relative;
     display: inline-block;
     ${(props: InputContainerProps & {theme: DefaultTheme}) => (
        props.required ?
        `&:before {
            content: '*';
            color: ${props.theme.colors.alert};
            position: absolute;
            font-size: 16px;
            font-weight: bold;
            top: 2px;
            right: 5px;
        }` : ''
    )}           
`;
export const InputContainer: React.FC<InputContainerProps> = ({required = false, children}) => {
    return (
        <InputContainerS required={required}>
            {children}
        </InputContainerS>
    );
}