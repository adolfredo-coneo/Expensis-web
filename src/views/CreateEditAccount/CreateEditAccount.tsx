import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@material-ui/core';

import DashContent from '../../layout/DashContent/DashContent';
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

const CreateEditAccount: React.FC<CreateEditAccountProps> = ({ code }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validate: (values) => {
      const errors: AccountModel = { ...initialValues };
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.description) {
        errors.description = 'Required';
      }
      if (!values.type) {
        errors.type = 'Required';
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <DashContent code={code} variant="dashed">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          variant="outlined"
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          variant="outlined"
        />
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          variant="outlined"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="asset">Asset</MenuItem>
          <MenuItem value="bank">Bank</MenuItem>
          <MenuItem value="wallet">Wallet</MenuItem>
        </Select>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={formik.values.balance}
          onChange={formik.handleChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </DashContent>
  );
};

export default CreateEditAccount;
