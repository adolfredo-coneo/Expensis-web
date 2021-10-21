import React from 'react';
import { useFormik } from 'formik';
import {
  createStyles,
  FormControl,
  makeStyles,
  MenuItem,
  TextField,
} from '@material-ui/core';

import Button from '../../components/UI/Button/Button';

interface RenderForm<T> {
  key: keyof T;
  label: string;
  error: boolean;
  select?: boolean;
  options?: string[];
  startAdornment?: React.ReactElement;
}

export type TransformForm<T> = Array<RenderForm<T>>;

interface FormInternLayoutProps<T> {
  initialValues: T;
  fields: TransformForm<T>;
  onSubmit: (values: T) => void;
  onCancel: () => void;
  validate: (values: T) => void;
}

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

const FormInternLayout: <T>(
  props: FormInternLayoutProps<T>
) => React.ReactElement<FormInternLayoutProps<T>> = ({
  initialValues,
  fields,
  onSubmit,
  onCancel,
  validate,
}) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {fields.map(({ key, label, select, options, startAdornment }) => {
        const { values } = formik;
        const value = values[key];
        const errorMessage = formik.errors[key];
        const touched = formik.touched[key];

        return (
          <FormControl key={key as string} className={classes.formControl}>
            <TextField
              id={key as string}
              label={label}
              error={touched && Boolean(errorMessage)}
              value={value}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              select={select}
              helperText={errorMessage}
              InputProps={{
                startAdornment,
              }}
              fullWidth
            >
              {select &&
                options &&
                options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
          </FormControl>
        );
      })}
      <Button color="secondary" size="large" onClick={onCancel}>
        Cancel
      </Button>
      <Button color="primary" size="large" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormInternLayout;
