import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './Input';

export default {
  title: 'form/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  id: 'small',
  label: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  id: 'medium',
  label: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
  id: 'large',
  label: 'Large',
};
