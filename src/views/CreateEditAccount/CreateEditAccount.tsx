import React from 'react';
import { useHistory } from 'react-router';

import DashContent from '../../layout/DashContent/DashContent';
import FormInternLayout from '../../layout/FormInternLayout/FormInternLayout';
import { Account as AccountModel } from '../../models/Accounts';

interface CreateEditAccountProps {
  code: string;
}

const CreateEditAccount: React.FC<CreateEditAccountProps> = ({ code }) => {
  const history = useHistory();

  const onCancelHandler = () => {
    history.push('/dashboard/accounts');
  };

  const onSubmitHandler = (values: AccountModel) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <DashContent code={code} variant="dashed">
      <FormInternLayout onSubmit={onSubmitHandler} onCancel={onCancelHandler} />
    </DashContent>
  );
};

export default CreateEditAccount;
