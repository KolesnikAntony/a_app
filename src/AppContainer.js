import React from 'react';
import App from './App';
import { Translate } from './context/translater/translate';
import { ErrorBoundary } from './hoc/errorBoundary/errorBoundary';
import AppTheme from './context/muiTheme/MUI_Theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ErrorBackup from './components/error-backup/ErrorBackup';

const AppContainer = ({ language }) => {
  return (
    <AppTheme>
      <Provider store={store}>
        <Translate language={language}>
          <ErrorBoundary backup={<ErrorBackup />}>
            <MemoryRouter>
              <App />
            </MemoryRouter>
          </ErrorBoundary>
        </Translate>
      </Provider>
    </AppTheme>
  );
};

export default AppContainer;
