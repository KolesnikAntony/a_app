import React from 'react';
import CoverageScreen from '../coverage-screen';
import { useNavigate } from 'react-router-dom';
import { APP_FORM } from '../../../constants/form-data';
import AppForm from '../../../hoc/app-form/app-form';
import { cleanFormData } from '../../../helpers/form-data-cleaner';
import { FORM_VALIDATION } from '../../../validation/validation-shema';
import { useDispatch } from 'react-redux';
import { addCoverage } from '../../../redux/general-slice';

const CreateContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (values, reset) => {
    const formData = cleanFormData(values);
    console.log(formData);
    dispatch(addCoverage(formData));
    reset();
    navigate('/');
  };

  return (
    <AppForm onSubmit={onSubmit} value={APP_FORM.INITIAL_FORM_STATE} validation={FORM_VALIDATION}>
      <CoverageScreen />;
    </AppForm>
  );
};

export default CreateContainer;
