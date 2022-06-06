import React, { createContext, useContext } from 'react';
import { translate } from './translate-body';
import PropTypes from 'prop-types';

export const TranslateContext = createContext({});

export const Translate = ({ language, children }) => {
  return <TranslateContext.Provider value={translate[language]}>{children}</TranslateContext.Provider>;
};
export const useTranslate = () => useContext(TranslateContext);

Translate.propTypes = {
  language: PropTypes.oneOf(['fr', 'en', 'de', 'it']),
};

Translate.defaultProps = {
  language: 'en',
};
