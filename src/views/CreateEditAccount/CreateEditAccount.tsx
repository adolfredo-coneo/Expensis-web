import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

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
  return (
    <DashContent code={code} variant="dashed">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: AccountModel = { ...initialValues };
          if (!values.name) {
            errors.name = 'Required';
          } 
          if (!values.description) {
            errors.description = 'Required';
          }
          return errors;
        }}
        onSubmit={(
          values: AccountModel,
          { setSubmitting }: FormikHelpers<AccountModel>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="description">Description</label>
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </DashContent>
  );
};

export default CreateEditAccount;
