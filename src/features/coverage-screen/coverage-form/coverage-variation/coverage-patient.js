import React from 'react';
import { Box, Collapse, Divider, Typography } from '@mui/material';
import CoverageReasonList from '../coverage-reason-list/coverage-reason-list';
import { APP_FORM } from '../../../../constants/form-data';
import TextField from '../../../../components/formUI/text-field/text-field';
import RadioGroupCustom from '../../../../components/formUI/radio-group/radio-group';
import { useCoverageStyle } from '../coverage-form.style';
import QuestionIcon from '../../../../assets/images/svg/question_reason_lineal.svg';
import LineIcon from '../../../../assets/images/svg/name.svg';
import SocialIcon from '../../../../assets/images/svg/AVS_namber.svg';
import DebtorIcon from '../../../../assets/images/svg/billing.svg';
import PhoneIcon from '../../../../assets/images/svg/call.svg';
import EmailIcon from '../../../../assets/images/svg/email_lineal.svg';
import MapIcon from '../../../../assets/images/svg/map.svg';
import MailBoxIcon from '../../../../assets/images/svg/postcode.svg';
import CityIcon from '../../../../assets/images/svg/city.svg';
import AddressIcon from '../../../../assets/images/svg/address.svg';
import PhoneField from '../../../../components/formUI/phone-field/phone-field';

const CoveragePatient = ({ open }) => {
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
      <Divider sx={sx.divider} />
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <PhoneIcon />
          Phone no.
        </Typography>
        <PhoneField />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <EmailIcon />
          Email
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.email} placeholder="mypatient@email.ch" />
      </Box>
      <Divider sx={sx.divider} />
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <LineIcon />
          Name
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.name} placeholder="Name" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <MapIcon />
          Search
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.search} placeholder="Type here to search with google" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <MailBoxIcon />
          Mailbox
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.mailbox} placeholder="Mailbox’s name" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <LineIcon />
          Second line
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.secondLine} placeholder="Second line" />
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <AddressIcon />
          Street
        </Typography>
        <Box sx={sx.double}>
          <TextField sx={{ width: 152 }} name={APP_FORM.FIELDS_NAME.address} placeholder="Address" />
          <TextField sx={{ width: 96 }} name={APP_FORM.FIELDS_NAME.house} placeholder="House №" />
        </Box>
      </Box>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <CityIcon />
          City
        </Typography>
        <Box sx={sx.double}>
          <TextField sx={{ width: 96 }} name={APP_FORM.FIELDS_NAME.postcode} placeholder="Postcode" />
          <TextField sx={{ width: 152 }} name={APP_FORM.FIELDS_NAME.city} placeholder="City" />
        </Box>
      </Box>
      <Collapse in={open}>
        <Divider sx={sx.divider} />
        <Box sx={sx.row}>
          <Typography sx={sx.label}>
            <SocialIcon />
            Social security
          </Typography>
          <TextField name={APP_FORM.FIELDS_NAME.socialSecurity} placeholder="756.1234.5678.97 (required)" />
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

export default CoveragePatient;
