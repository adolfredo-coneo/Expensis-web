import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import {
  createStyles,
  FormControl,
  InputAdornment,
  makeStyles,
  MenuItem,
  TextField,
} from '@material-ui/core';
import Button from '../../components/UI/Button/Button';

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

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const CreateEditAccount: React.FC<CreateEditAccountProps> = ({ code }) => {
  const history = useHistory();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: initialValues,
    validate: (values) => {
      const errors: any = {};
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

      if (isNaN(values.balance) || !values.balance.toString()) {
        errors.balance = 'Must be a number';
      }

      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onCancelHandler = () => {
    history.push('/dashboard/accounts');
  };

  return (
    <DashContent code={code} variant="dashed">
      <form onSubmit={formik.handleSubmit}>
        <FormControl className={classes.formControl}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="outlined"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            variant="outlined"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            select
            id="type"
            name="type"
            label="Type"
            value={formik.values.type}
            onChange={formik.handleChange}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
            variant="outlined"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="asset">Asset</MenuItem>
            <MenuItem value="bank">Bank</MenuItem>
            <MenuItem value="wallet">Wallet</MenuItem>
          </TextField>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            select
            id="currency"
            name="currency"
            label="Currency"
            value={formik.values.currency}
            onChange={formik.handleChange}
            error={formik.touched.currency && Boolean(formik.errors.currency)}
            helperText={formik.touched.currency && formik.errors.currency}
            variant="outlined"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="COP">COP</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
          </TextField>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <TextField
            id="balance"
            name="balance"
            label="Balance"
            value={formik.values.balance}
            onChange={formik.handleChange}
            error={formik.touched.balance && Boolean(formik.errors.balance)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            variant="outlined"
            helperText={formik.touched.balance && formik.errors.balance}
          />
        </FormControl>
        <Button color="secondary" size="large" onClick={onCancelHandler}>
          Cancel
        </Button>
        <Button color="primary" size="large" type="submit">
          Submit
        </Button>
      </form>
    </DashContent>
  );
};

export default CreateEditAccount;
