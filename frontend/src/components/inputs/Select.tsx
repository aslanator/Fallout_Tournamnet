import React, {useState} from 'react';
import styled from 'styled-components';
import {InputContainer} from 'components/inputs/InputContainer';

export type SelectOption = {
    value: string;
    title: string;
}

export type SelectProps = {
    required: boolean;
    options: SelectOption[]
}

const SelectS = styled.input`
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

export const Select: React.FC<SelectProps> = ({placeholder, required = false}) => {
    const [value, changeValue] = useState('');
    return (
        <InputContainer required={required}>
            <SelectS>

            </SelectS>
        </InputContainer>
    );
}