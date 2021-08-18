import React from 'react';
import { useHistory } from 'react-router-dom';

import DashContent from '../../layout/DashContent/DashContent';
import Button from '../../components/UI/Button/Button';

const Accounts: React.FC = () => {
  const history = useHistory();

  const newAccountHandler = () => {
    history.push('/dashboard/create-account');
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
      This is the Accounts Content for you
    </DashContent>
  );
};

export default Accounts;
