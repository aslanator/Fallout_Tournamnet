import React from 'react';
import styled from 'styled-components';
import {InputContainer} from 'components/inputs/InputContainer';

export type SelectOption = {
    value: string;
    title: string;
}

export type SelectProps = {
    required: boolean;
    options: SelectOption[];
    selected: string;
    onChange: (value: string) => void
}

const SelectS = styled.select`

`;

export const Select: React.FC<SelectProps> = ({options, required = false, selected, onChange}) => {
    const Options = options.map(({value, title}) => (
        <option selected={value === selected} value={value} key={value}>
            {title}
        </option>
    ));
    return (
        <InputContainer required={required}>
            <SelectS onChange={event => onChange(event.target.value)}>
                {Options}
            </SelectS>
        </InputContainer>
    );
}