import React from 'react';
import { useHistory } from 'react-router-dom';

import DashContent from '../../layout/DashContent/DashContent';
import Button from '../../components/UI/Button/Button';
import TableLayout, { TransformTable } from '../../layout/TableLayout/TableLayout';
import { Account as AccountModel } from '../../models/Accounts';

const accounts: AccountModel[] = [
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
];

const headers = (): TransformTable<AccountModel> => [
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Description',
    key: 'description',
    render: account => <span>{account.description}</span>,
  },
  {
    label: 'Type',
    key: 'type',
    render: account => <span>{account.type}</span>,
  },
  {
    label: 'Balance',
    key: 'balance',
    align: 'right',
    render: account => <span>{account.balance}</span>,
  },
  {
    label: 'Currency',
    key: 'currency',
    render: account => <span>{account.currency}</span>,
  },
  {
    label: 'Created at',
    key: 'createdAt',
    render: account => <span>{account.createdAt}</span>,
  },
  {
    label: 'Updated at',
    key: 'updatedAt',
    render: account => <span>{account.updatedAt}</span>,
  },
];

const Accounts: React.FC = () => {
  const history = useHistory();

  const newAccountHandler = () => {
    history.push('/dashboard/accounts/create-account');
  };
  return (
    <DashContent
      code="accounts"
      variant="none"
      trailing={
        <>
          <Button color="danger" size="large">
            Delete Selected Account
          </Button>
          <Button color="primary" size="large" onClick={newAccountHandler}>
            Createa Account
          </Button>
        </>
      }
    >
      <TableLayout<AccountModel> items={accounts} headers={headers()} />
    </DashContent>
  );
};

export default Accounts;
