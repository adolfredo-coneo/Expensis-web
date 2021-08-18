import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../../components/UI/Button/Button';
import { BrowserRouter } from 'react-router-dom';

import DashContent from './DashContent';

export default {
  title: 'layout/DashContent',
  component: DashContent,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof DashContent>;

const Template: ComponentStory<typeof DashContent> = (args) => (
  <div style={{ height: '500px' }}>
    <DashContent {...args} />
  </div>
);

export const Solid = Template.bind({});
Solid.args = {
  code: 'dashboard',
  variant: 'solid',
  children: 'This is the regular',
};

export const Dotted = Template.bind({});
Dotted.args = {
  code: 'dashboard',
  variant: 'dotted',
  children: 'This is the regular',
};

export const Dashed = Template.bind({});
Dashed.args = {
  code: 'dashboard',
  variant: 'dashed',
  children: 'This is the regular',
};

export const Double = Template.bind({});
Double.args = {
  code: 'dashboard',
  variant: 'double',
  children: 'This is the regular',
};

export const None = Template.bind({});
None.args = {
  code: 'dashboard',
  variant: 'none',
  children: 'This is the regular',
};

export const WithTrailing = Template.bind({});
WithTrailing.args = {
  code: 'dashboard',
  variant: 'solid',
  children: 'This is the Trailing Button',
  trailing: (
    <Button color="primary" size="small">
      Trailing Button
    </Button>
  ),
};
