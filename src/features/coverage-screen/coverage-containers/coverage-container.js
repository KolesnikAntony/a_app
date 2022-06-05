import React from 'react';
import CoverageScreen from '../coverage-screen';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_FORM } from '../../../constants/form-data';
import AppForm from '../../../hoc/app-form/app-form';
import { cleanFormData } from '../../../helpers/form-data-cleaner';
import { FORM_VALIDATION } from '../../../validation/validation-shema';

const CoverageContainer = () => {
  const { state: elementId, pathname } = useLocation();
  const navigate = useNavigate();

  const onSubmit = (values, reset) => {
    const formData = cleanFormData(values);
    if (pathname === '/edit') {
      console.log(`edit item id ${elementId}`, formData);
    } else {
      console.log('post', formData);
    }
    reset();
    navigate('/');
  };

  return (
    <AppForm onSubmit={onSubmit} value={APP_FORM.INITIAL_FORM_STATE} validation={FORM_VALIDATION}>
      <CoverageScreen />;
    </AppForm>
  );
};

export default CoverageContainer;
