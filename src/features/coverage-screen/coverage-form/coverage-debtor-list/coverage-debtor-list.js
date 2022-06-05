import React from 'react';
import { APP_FORM } from '../../../../constants/form-data';
import { DEBTORS } from '../../../../constants/debtor-data';
import { Typography } from '@mui/material';
import SelectField from '../../../../components/formUI/select-field/select-field';
import SelectOption from '../../../../components/formUI/select-field/select-option';

const CoverageDebtorList = () => {
  return (
    <SelectField name={APP_FORM.FIELDS_NAME.debtor} defaultItem="Select a debtor">
      <For each="debtor" of={DEBTORS}>
        <SelectOption key={debtor.name} value={debtor.name}>
          {debtor.icon}
          <Typography ml={1}>{debtor.name}</Typography>
        </SelectOption>
      </For>
    </SelectField>
  );
};

export default CoverageDebtorList;
