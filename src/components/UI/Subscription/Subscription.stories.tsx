import React from 'react';
import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';

export default {
  title: 'form/Subscription',
};

export const PrimarySubscription = () => (
  <div>
    <Large variant="small" id="small" label="Small" />
    <Primary color="primary">Button</Primary>
  </div>
);
