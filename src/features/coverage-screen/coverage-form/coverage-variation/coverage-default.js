import React from 'react';
import { Box, Collapse, Typography } from '@mui/material';
import CoverageReasonList from '../coverage-reason-list/coverage-reason-list';
import SearchField from '../../../../components/formUI/search-field/search-field';
import { APP_FORM } from '../../../../constants/form-data';
import TextField from '../../../../components/formUI/text-field/text-field';
import RadioGroupCustom from '../../../../components/formUI/radio-group/radio-group';
import { useCoverageStyle } from '../coverage-form.style';
import QuestionIcon from '../../../../assets/images/svg/question_reason_lineal.svg';
import InsuranceIcon from '../../../../assets/images/svg/insurance.svg';
import SocialIcon from '../../../../assets/images/svg/AVS_namber.svg';
import PassIcon from '../../../../assets/images/svg/password-number.svg';
import CalendarIcon from '../../../../assets/images/svg/calendar.svg';
import DebtorIcon from '../../../../assets/images/svg/billing.svg';

const CoverageDefault = ({ insurance, open }) => {
  const sx = useCoverageStyle();
  return (
    <>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <QuestionIcon />
          Reason
        </Typography>
        <CoverageReasonList />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <InsuranceIcon />
          Insurance
        </Typography>
        <SearchField options={insurance} name={APP_FORM.FIELDS_NAME.insurance} placeholder="Search insurance" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <PassIcon />
          Card Number
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.cardNumber} placeholder="Card number" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <PassIcon />
          Policy Number
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.policyNumber} placeholder="Policy number" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <SocialIcon />
          Social security
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.socialSecurity} placeholder="Social security" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <CalendarIcon />
          Case opening
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.caseOpening} type={'date'} />
      </Box>
      <Collapse in={open}>
        <Box sx={sx.row}>
          <Typography sx={sx.label}>
            <QuestionIcon />
            Admission
          </Typography>
          <RadioGroupCustom
            name={APP_FORM.FIELDS_NAME.admission}
            values={[
              { label: 'Ambulatory', value: 'ambulatory' },
              { label: 'Hospital', value: 'hospital' },
            ]}
          />
        </Box>
        <Box sx={sx.row}>
          <Typography sx={sx.label}>
            <DebtorIcon />
            Refund
          </Typography>
          <RadioGroupCustom
            name={APP_FORM.FIELDS_NAME.refund}
            values={[
              { label: 'TP', value: 'tp' },
              { label: 'TG', value: 'tg' },
            ]}
          />
        </Box>
      </Collapse>
    </>
  );
};

export default CoverageDefault;
