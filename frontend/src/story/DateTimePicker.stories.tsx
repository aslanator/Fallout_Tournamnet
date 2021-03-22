import React, {useState} from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { DateTimePicker, DateTimePickerProps } from 'components/inputs/DateTimePicker';

export default {
  title: 'Components/Datetime',
  component: DateTimePicker,
} as Meta;

const Template: Story<DateTimePickerProps> = (args) => {
    const [value, setValue] = useState('');
    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <><DateTimePicker {...args} value={value} onChange={onChange} /><p>{value}</p></>
    )
};


export const Default = Template.bind({});
Default.args = {
}
