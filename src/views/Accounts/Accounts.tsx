import React from 'react';
import { useHistory } from 'react-router-dom';

import DashContent from '../../layout/DashContent/DashContent';
import Button from '../../components/UI/Button/Button';
import TableLayout from '../../layout/TableLayout/TableLayout';
import { Account as AccountModel } from '../../models/Accounts';

const accounts: AccountModel[] = [
  {
    id: 1,
    name: 'Account 1',
    description: 'Account 1 description',
    type: 'Asset',
    balance: 100,
    currency: 'EUR',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Account 2',
    description: 'Account 2 description',
    type: 'Liability',
    balance: 200,
    currency: 'EUR',
    createdAt: new Date(),
    updatedAt: new Date(),
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
      variant="dashed"
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
      <TableLayout<AccountModel> items={accounts} />
    </DashContent>
  );
};

export default Accounts;
