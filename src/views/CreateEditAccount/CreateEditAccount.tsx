import React from 'react';
import { useHistory } from 'react-router';
import { InputAdornment } from '@material-ui/core';

import DashContent from '../../layout/DashContent/DashContent';
import FormInternLayout, {
  TransformForm,
} from '../../layout/FormInternLayout/FormInternLayout';
import { Account as AccountModel } from '../../models/Accounts';

interface CreateEditAccountProps {
  code: string;
}

const initialValues: AccountModel = {
  id: 0,
  name: '',
  description: '',
  type: '',
  balance: 0,
  currency: '',
  createdAt: '',
  updatedAt: '',
};

const fields = (): TransformForm<AccountModel> => [
  {
    key: 'name',
    label: 'Name',
    error: true,
  },
  {
    key: 'description',
    label: 'Descrption',
    error: true,
    select: false,
  },
  {
    key: 'type',
    label: 'Type',
    error: true,
    select: true,
    options: ['asset', 'bank', 'wallet'],
  },
  {
    key: 'currency',
    label: 'Currency',
    error: true,
    select: true,
    options: ['COP', 'USD', 'EUR'],
  },
  {
    key: 'balance',
    label: 'Balance',
    error: false,
    select: false,
    startAdornment: <InputAdornment position="start">$</InputAdornment>,
  },
];

const CreateEditAccount: React.FC<CreateEditAccountProps> = ({ code }) => {
  const history = useHistory();

  const onCancelHandler = () => {
    history.push('/dashboard/accounts');
  };

  const onSubmitHandler = (values: AccountModel) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validate = (values: AccountModel) => {
    const errors: Partial<AccountModel> = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.type) {
      errors.type = 'Required';
    }
    if (!values.currency) {
      errors.currency = 'Required';
    }

    return errors;
  };

  return (
    <DashContent code={code} variant="dashed">
      <FormInternLayout<AccountModel>
        initialValues={initialValues}
        fields={fields()}
        onSubmit={onSubmitHandler}
        onCancel={onCancelHandler}
        validate={validate}
      />
    </DashContent>
  );
};

export default CreateEditAccount;
