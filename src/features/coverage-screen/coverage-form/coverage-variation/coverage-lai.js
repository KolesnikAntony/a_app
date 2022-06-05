import React from 'react';
import { Box, Collapse, Typography } from '@mui/material';
import CoverageReasonList from '../coverage-reason-list/coverage-reason-list';
import SearchField from '../../../../components/formUI/search-field/search-field';
import { APP_FORM } from '../../../../constants/form-data';
import TextField from '../../../../components/formUI/text-field/text-field';
import RadioGroupCustom from '../../../../components/formUI/radio-group/radio-group';
import { useCoverageStyle } from '../coverage-form.style';
import QuestionIcon from '../../../../assets/images/svg/question_reason_lineal.svg';
import LineIcon from '../../../../assets/images/svg/name.svg';
import PassIcon from '../../../../assets/images/svg/password-number.svg';
import SocialIcon from '../../../../assets/images/svg/AVS_namber.svg';
import CalendarIcon from '../../../../assets/images/svg/calendar.svg';
import DebtorIcon from '../../../../assets/images/svg/billing.svg';
import WheelIcon from '../../../../assets/images/svg/wheelchair_filled.svg';

const CoverageLai = ({ di, open }) => {
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
          <LineIcon />
          Description
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.description} placeholder="Description" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <WheelIcon />
          Di Office
        </Typography>
        <SearchField options={di} name={APP_FORM.FIELDS_NAME.office} placeholder="Search DI office" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <PassIcon />
          Case number
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.caseNumber} placeholder="Case number (required)" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <SocialIcon />
          Social security
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.socialSecurity} placeholder="756.1234.5678.97 (required)" />
      </Box>

      <Collapse in={open}>
        <Box sx={sx.row}>
          <Typography sx={sx.label}>
            <PassIcon />
            NIF
          </Typography>
          <TextField name={APP_FORM.FIELDS_NAME.nif} placeholder="NIF" />
        </Box>
        <Box sx={sx.row}>
          <Typography sx={sx.label}>
            <CalendarIcon />
            Case date{' '}
          </Typography>
          <TextField name={APP_FORM.FIELDS_NAME.caseDate} type={'date'} />
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
      </Collapse>
    </>
  );
};

export default CoverageLai;
