import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../components/buttons/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Тест</Button>;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Long: Story<ButtonProps> = (args) => <Button {...args}>Тест длинного текста, который теоретически может быть дабавлен для кнопки</Button>;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
