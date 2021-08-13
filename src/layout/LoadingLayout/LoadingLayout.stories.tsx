import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoadingLayout from './LoadingLayout';

export default {
  title: 'layout/LoadingLayout',
  component: LoadingLayout,
} as ComponentMeta<typeof LoadingLayout>;

const Template: ComponentStory<typeof LoadingLayout> = (args) => (
  <LoadingLayout {...args} />
);

export const Determinate = Template.bind({});
Determinate.args = {
  variant: 'determinate',
  value: 20,
};

export const Buffer = Template.bind({});
Buffer.args = {
  variant: 'buffer',
  value: 70,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  variant: 'indeterminate',
};
