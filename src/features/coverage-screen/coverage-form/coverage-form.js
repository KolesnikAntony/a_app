import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CoveragePreloader from '../coverage-preloader/coverage-preloader';
import CoverageDebtorList from './coverage-debtor-list/coverage-debtor-list';
import icon from '../../../assets/images/svg/temp-insurent.svg?url';
import ShowMoreBtn from '../../../components/show-more-btn/show-more-btn';
import { useCoverageStyle } from './coverage-form.style';
import CoverageDefault from './coverage-variation/coverage-default';
import { useField } from 'formik';
import { APP_FORM } from '../../../constants/form-data';
import CoverageLamal from './coverage-variation/coverage-lamal';
import CoverageLai from './coverage-variation/coverage-lai';
import CoverageLaaa from './coverage-variation/coverage-laaa';
import CoverageLam from './coverage-variation/coverage-lam';
import CoverageLca from './coverage-variation/coverage-lca';
import CoveragePatient from './coverage-variation/coverage-patient';
import CoverageHold from './coverage-variation/coverage-hold';
import DebtorIcon from '../../../assets/images/svg/billing.svg';
import { useReset } from '../../../hooks/useReset';

const array = [
  { id: 12212, name: 'Assura Assurance', icon },
  { id: 4141516, name: 'Unéo Assurance', icon },
];

const CoverageForm = () => {
  const sx = useCoverageStyle();
  const [isFetching, setIsFetching] = useState(true);
  const [open, setOpen] = useState(false);

  const [field] = useField(APP_FORM.FIELDS_NAME.debtor);
  const { value } = field;

  useReset(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsFetching(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isFetching) {
    return <CoveragePreloader />;
  }

  return (
    <Box sx={sx.container}>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <DebtorIcon />
          Debtor
        </Typography>
        <CoverageDebtorList />
      </Box>
      <Choose>
        <When condition={value === 'LAMal'}>
          <CoverageLamal insurance={array} open={open} />
        </When>
        <When condition={value === 'LAA'}>
          <CoverageLaaa insurance={array} open={open} />
        </When>
        <When condition={value === 'LAI'}>
          <CoverageLai di={array} open={open} />
        </When>
        <When condition={value === 'LAM'}>
          <CoverageLam insurance={array} open={open} />
        </When>
        <When condition={value === 'LCA'}>
          <CoverageLca insurance={array} open={open} />
        </When>
        <When condition={value === 'Patient' || value === 'Other'}>
          <CoveragePatient open={open} />
        </When>
        <When condition={value === 'On-Hold'}>
          <CoverageHold />
        </When>
        <Otherwise>
          <CoverageDefault insurance={array} open={open} />
        </Otherwise>
      </Choose>
      <If condition={value !== 'On-Hold'}>
        <ShowMoreBtn open={open} onClick={() => setOpen(!open)} />
      </If>
    </Box>
  );
};

export default CoverageForm;
