import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  createStyles,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
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
  const classes = useStyles();

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
      if (!values.currency) {
        //errors.currency = 'Required';
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
        <FormControl variant="outlined" className={classes.formControl}>
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
        <FormControl variant="outlined" className={classes.formControl}>
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
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            label="Type"
            error={formik.touched.type && Boolean(formik.errors.type)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="asset">Asset</MenuItem>
            <MenuItem value="bank">Bank</MenuItem>
            <MenuItem value="wallet">Wallet</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="currency-label">Currency</InputLabel>
          <Select
            labelId="currency-label"
            id="currency"
            value={formik.values.currency}
            onChange={formik.handleChange}
            label="Currency"
            error={formik.touched.currency && Boolean(formik.errors.currency)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="COP">COP</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={formik.values.balance}
            onChange={formik.handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </DashContent>
  );
};

export default CreateEditAccount;
