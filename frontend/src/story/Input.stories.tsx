import React, {useState} from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { InputText, InputTextProps } from 'components/inputs/InputText';

export default {
  title: 'Components/InputText',
  component: InputText,
} as Meta;

const Template: Story<InputTextProps> = (args) => {
    const [value, setValue] = useState('');
    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <><InputText {...args} value={value} onChange={onChange} /><p>{value}</p></>
    )
};

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Введите текст...',
}

export const Required = Template.bind({});
Required.args = {
    placeholder: 'Обязательно введите текст...',
    required: true,
}

export const Integer = Template.bind({});
Integer.args = {
    placeholder: 'Введите цифры...',
    integer: true
}