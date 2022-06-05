import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';

const AppForm = ({ children, onSubmit, value, validation }) => {
  return (
    <Formik
      initialValues={{
        ...value,
      }}
      validationSchema={validation}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values, resetForm);
      }}>
      <Form>{children}</Form>
    </Formik>
  );
};

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
};

export default AppForm;
