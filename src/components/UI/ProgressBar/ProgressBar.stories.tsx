import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProgressBar from './ProgressBar';

export default {
  title: 'layout/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
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
