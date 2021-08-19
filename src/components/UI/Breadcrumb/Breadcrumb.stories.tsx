import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';

export default {
  title: 'layout/Breadcrumb',
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  pathname: '/dashboard/accounts/create-account',
};
