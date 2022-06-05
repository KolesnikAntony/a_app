import React from 'react';
import { APP_FORM } from '../../../../constants/form-data';
import { Typography } from '@mui/material';
import SelectField from '../../../../components/formUI/select-field/select-field';
import SelectOption from '../../../../components/formUI/select-field/select-option';
import { REASONS } from '../../../../constants/reason-data';

const CoverageReasonList = () => {
  return (
    <SelectField name={APP_FORM.FIELDS_NAME.reason} defaultItem={'Select a reason'}>
      <For each="reason" of={REASONS}>
        <SelectOption key={reason} value={reason}>
          <Typography>{reason}</Typography>
        </SelectOption>
      </For>
    </SelectField>
  );
};

export default CoverageReasonList;
