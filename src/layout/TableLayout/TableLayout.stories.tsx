import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Account as AccountModel } from '../../models/Accounts';
import TableLayout, { TransformTable } from './TableLayout';

export default {
  title: 'layout/TableLayout',
  component: TableLayout,
} as ComponentMeta<typeof TableLayout>;

const Template: ComponentStory<typeof TableLayout> = (args) => (
  <TableLayout {...args} />
);

const items: AccountModel[] = [
  {
    id: 1,
    name: 'Account 1',
    description: 'Account 1 description',
    type: 'Asset',
    balance: 100,
    currency: 'EUR',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    name: 'Account 2',
    description: 'Account 2 description',
    type: 'Liability',
    balance: 200,
    currency: 'EUR',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    name: 'Account 3',
    description: 'Account 3 description',
    type: 'Income',
    balance: 300,
    currency: 'EUR',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    name: 'Account 4',
    description: 'Account 4 description',
    type: 'Expense',
    balance: 400,
    currency: 'EUR',
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
  },
];

const headers = (): TransformTable<AccountModel> => [
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Description',
    key: 'description',
    render: (account) => <span>{account.description}</span>,
  },
  {
    label: 'Type',
    key: 'type',
    render: (account) => <span>{account.type}</span>,
  },
  {
    label: 'Balance',
    key: 'balance',
    align: 'right',
    render: (account) => <span>{account.balance}</span>,
  },
  {
    label: 'Currency',
    key: 'currency',
    render: (account) => <span>{account.currency}</span>,
  },
  {
    label: 'Created at',
    key: 'createdAt',
    render: (account) => <span>{account.createdAt}</span>,
  },
  {
    label: 'Updated at',
    key: 'updatedAt',
    render: (account) => <span>{account.updatedAt}</span>,
  },
];

export const Normal = Template.bind({});
Normal.args = {
  items: items,
  headers: headers(),
};
