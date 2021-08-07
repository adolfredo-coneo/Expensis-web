import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';
import Center from '../Center/Center';

export default {
  title: 'form/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Center>
    <Button {...args} />
  </Center>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger',
};
