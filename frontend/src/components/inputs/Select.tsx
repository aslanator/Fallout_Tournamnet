import React from 'react';
import styled from 'styled-components';
import {InputContainer} from 'components/inputs/InputContainer';

export type SelectOption = {
    value: string;
    title: string;
}

export type SelectProps = {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}

const SelectS = styled.select`

`;

export const Select: React.FC<SelectProps> = ({options, required = false, value, onChange}) => {
    const Options = options.map(({value, title}) => (
        <option value={value} key={value}>
            {title}
        </option>
    ));
    return (
        <InputContainer required={required}>
            <SelectS onChange={event => onChange(event.target.value)} value={value}>
                {Options}
            </SelectS>
        </InputContainer>
    );
}