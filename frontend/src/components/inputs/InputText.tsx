import React, {useState} from 'react';
import styled from 'styled-components';
import {InputContainer} from 'components/inputs/InputContainer';

export type InputTextProps = {
    placeholder: string;
    required: boolean;
}

const InputTextS = styled.input`
    border: 1px solid ${props => props.theme.colors.primary3};
    border-radius: 6px;
    outline: none;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary1};
    font-size: 14px;
    line-height: 150%;
    &::placeholder {
        color: ${props => props.theme.colors.primary2};
        opacity: 0.6;
    }
`;

export const InputText: React.FC<InputTextProps> = ({placeholder, required = false}) => {
    const [value, changeValue] = useState('');
    return (
        <InputContainer required={required}>
            <InputTextS type="text" placeholder={placeholder} value={value} onChange={event => changeValue(event.target.value)}/>
        </InputContainer>
    );
}