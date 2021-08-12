import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import DashContent from './DashContent';

export default {
  title: 'layout/DashContent',
  component: DashContent,
} as ComponentMeta<typeof DashContent>;

const Template: ComponentStory<typeof DashContent> = (args) => (
  <div style={{ height: '500px' }}>
    <DashContent {...args} />
  </div>
);

export const Solid = Template.bind({});
Solid.args = {
  title: 'Regular',
  variant: 'solid',
  children: 'This is the regular',
};

export const Dotted = Template.bind({});
Dotted.args = {
  title: 'Regular',
  variant: 'dotted',
  children: 'This is the regular',
};

export const Dashed = Template.bind({});
Dashed.args = {
  title: 'Regular',
  variant: 'dashed',
  children: 'This is the regular',
};

export const Double = Template.bind({});
Double.args = {
  title: 'Regular',
  variant: 'double',
  children: 'This is the regular',
};

export const None = Template.bind({});
None.args = {
  title: 'Regular',
  variant: 'none',
  children: 'This is the regular',
};
