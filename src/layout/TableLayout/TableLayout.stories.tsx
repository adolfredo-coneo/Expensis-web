import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import { Account as AccountModel } from '../../models/Accounts';
import TableLayout, { TableLayoutProps, TransformTable } from './TableLayout';

export default {
  title: 'layout/TableLayout',
  component: TableLayout,
} as ComponentMeta<typeof TableLayout>;

const Template = <T extends {}>(): Story<TableLayoutProps<T>> => (args) => (
  <TableLayout<T> {...args} />
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

export const Normal = Template<AccountModel>().bind({});
Normal.args = {
  items: items,
  headers: headers(),
};
