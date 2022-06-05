import React from 'react';
import App from './App';
import { Translate, useTranslate } from './context/translater/translate';
import { ErrorBoundary } from './hoc/errorBoundary/errorBoundary';
import PropTypes from 'prop-types';
import AppTheme from './context/muiTheme/MUI_Theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const AppContainer = (props) => {
  return (
    <AppTheme>
      <Provider store={store}>
        <Translate language={props.language}>
          <ErrorBoundary backup={<div>{useTranslate().globalError}</div>}>
            <MemoryRouter>
              <App />
            </MemoryRouter>
          </ErrorBoundary>
        </Translate>
      </Provider>
    </AppTheme>
  );
};

AppContainer.propTypes = {
  idPatient: PropTypes.number,
  idMedicalEstablishment: PropTypes.number,
  language: PropTypes.oneOf(['fr', 'en', 'de', 'it']),
  idConsultations: PropTypes.number,
};

AppContainer.defaultProps = {
  language: 'fr',
  idPatient: 23246,
  idMedicalEstablishment: 1,
  idConsultations: 999,
};

export default AppContainer;
