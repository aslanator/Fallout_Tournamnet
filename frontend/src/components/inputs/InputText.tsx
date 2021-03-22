import React from 'react';
import styled from 'styled-components';
import {InputContainer} from 'components/inputs/InputContainer';

export type InputTextProps = {
    placeholder: string;
    required: boolean;
    value?: string;
    integer: boolean;
    onChange: (value: string) => void
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

export const InputText: React.FC<InputTextProps> = ({placeholder, required = false, value = '', integer = false, onChange}) => {
    const getValue = (value: string): string => {
        let mutatedValue: string | number = value;
        if(integer) {
            mutatedValue = parseInt(value);
            mutatedValue = isNaN(mutatedValue) ? 0 : mutatedValue;
        }
        return String(mutatedValue);
    }
    return (
        <InputContainer required={required}>
            <InputTextS type="text" placeholder={placeholder} value={value} onChange={event => onChange(getValue(event.target.value))}/>
        </InputContainer>
    );
}