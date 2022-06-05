import * as Yup from 'yup';

export const FORM_VALIDATION = Yup.object().shape({
  debtor: Yup.string().required('This field cannot be empty'),
  reason: Yup.string().when('debtor', {
    is: (val) => val === 'On-Hold',
    then: false,
    otherwise: Yup.string().required('This field cannot be empty'),
  }),
  insurance: Yup.string().when('debtor', {
    is: (val) => ['LAI', 'Other', 'On-Hold'].some((str) => str === val),
    then: Yup.string(),
    otherwise: Yup.string().required('This field cannot be empty'),
  }),
  office: Yup.string().when('debtor', {
    is: 'LAI',
    then: Yup.string().required('This field cannot be empty'),
    otherwise: Yup.string(),
  }),
  cardNumber: Yup.number().when('debtor', {
    is: (val) => ['LAA', 'LAI', 'LAM', 'LCA', 'Patient', 'Other', 'On-Hold'].some((str) => str === val),
    then: false,
    otherwise: Yup.number().required('This field cannot be empty').typeError('Must be a number'),
  }),
  policyNumber: Yup.number().when('debtor', {
    is: (val) => ['LAA', 'LAI', 'Patient', 'Other', 'On-Hold'].some((str) => str === val),
    then: false,
    otherwise: Yup.number().required('This field cannot be empty').typeError('Must be a number'),
  }),
  // socialSecurity: Yup.string(),
  // caseOpening: Yup.date().required('This field cannot be empty'),
  // accidentDate: Yup.date().required('This field cannot be empty'),
  // caseDate: Yup.date().required('This field cannot be empty'),
  // admission: Yup.string(),
  // refund: Yup.string(),
  // description: Yup.string().required('This field cannot be empty'),
  // claimNumber: Yup.number().required('This field cannot be empty').typeError('Must be a number'),
  // caseNumber: Yup.number().required('This field cannot be empty').typeError('Must be a number'),
  // nif: Yup.number().typeError('Must be a number'),
  // email: Yup.string().email('Enter correct email'),
});
