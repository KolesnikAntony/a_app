export const APP_FORM = {
  INITIAL_FORM_STATE: {
    debtor: '',
    reason: '',
    insurance: '',
    cardNumber: '',
    policyNumber: '',
    socialSecurity: '',
    caseOpening: '',
    admission: 'ambulatory',
    refund: 'tp',
    description: '',
    claimNumber: '',
    accidentDate: '',
    office: '',
    caseNumber: '',
    nif: '',
    caseDate: '',
    /////////////
    phone: '',
    email: '',
    name: '',
    search: '',
    mailbox: '',
    secondLine: '',
    address: '',
    house: '',
    postcode: '',
    city: '',
  },
  FIELDS_NAME: {},
  init: function () {
    this.FIELDS_NAME = Object.fromEntries(Object.keys(this.INITIAL_FORM_STATE).map((el) => [el, el]));
  },
};
APP_FORM.init();
