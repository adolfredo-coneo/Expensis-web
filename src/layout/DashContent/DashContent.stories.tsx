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

export const Green = Template.bind({});
Green.args = {
  title: 'Regular',
  children: 'This is the regular',
};
