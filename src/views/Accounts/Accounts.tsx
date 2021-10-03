import React from 'react';
import { useHistory } from 'react-router-dom';

import DashContent from '../../layout/DashContent/DashContent';
import Button from '../../components/UI/Button/Button';
import TableLayout, {
  TransformTable,
} from '../../layout/TableLayout/TableLayout';
import { Account as AccountModel } from '../../models/Accounts';
import { useAppSelector } from '../../store/hooks';

const headers = (): TransformTable<AccountModel> => [
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Description',
    key: 'description',
    minWidth: 250,
    render: function ren(account) {
      return <span>{account.description}</span>;
    },
  },
  {
    label: 'Type',
    key: 'type',
    render: function ren(account) {
      return <span>{account.type}</span>;
    },
  },
  {
    label: 'Balance',
    key: 'balance',
    align: 'right',
    minWidth: 80,
    render: function ren(account) {
      return <span>{account.balance}</span>;
    },
  },
  {
    label: 'Currency',
    key: 'currency',
    minWidth: 50,
    render: function ren(account) {
      return <span>{account.currency}</span>;
    },
  },
  {
    label: 'Created at',
    key: 'createdAt',
    minWidth: 100,
    render: function ren(account) {
      return <span>{account.createdAt}</span>;
    },
  },
  {
    label: 'Updated at',
    key: 'updatedAt',
    minWidth: 100,
    render: function ren(account) {
      return <span>{account.updatedAt}</span>;
    },
  },
];

const Accounts: React.FC = () => {
  const history = useHistory();
  const accounts = useAppSelector((state) => state.accounts.accounts);

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
            Delete Selected Accounts
          </Button>
          <Button color="primary" size="large" onClick={newAccountHandler}>
            Create Account
          </Button>
        </>
      }
    >
      <TableLayout<AccountModel> items={accounts} headers={headers()} />
    </DashContent>
  );
};

export default Accounts;
