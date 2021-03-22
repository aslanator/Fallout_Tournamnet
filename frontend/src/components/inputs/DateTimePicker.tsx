import React from 'react';
import styled from 'styled-components';

export type DateTimePickerProps = {
    value?: string;
    onChange: (value: string) => void;
    showTime?: boolean;
}

const DateTimePickerS = styled.input`

`;

export const DateTimePicker: React.FC<DateTimePickerProps> = ({value = '', showTime = false, onChange}) => {
    const type = showTime ? 'datetime-local' : 'date';
    return (
            <DateTimePickerS type={type} onChange={event => onChange(event.target.value)} />
    );
}