import React, {useState} from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps } from 'components/inputs/Select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = useState(args.options[0].value);
  const onChange = (value: string) => {
      setValue(value);
  };
  return (
    <>
      <Select {...args} onChange={onChange} />
      <p>{value}</p>
    </>
  )
};

export const Default = Template.bind({});
Default.args = {
  options: [{title: 'Вариант1', value: '1'}, {title: 'Вариант2', value: '2'}, {title: 'Вариант3', value: '3'}]
}

export const Required = Template.bind({});
Required.args = {
    required: true,
    options: [{title: 'Вариант1', value: '1'}, {title: 'Вариант2', value: '2'}, {title: 'Вариант3', value: '3'}]
}