import React, { createContext, useContext } from 'react';
import { translate } from './translate-body';

export const TranslateContext = createContext({});

export const Translate = ({ language, children }) => {
  return <TranslateContext.Provider value={translate[language]}>{children}</TranslateContext.Provider>;
};
export const useTranslate = () => useContext(TranslateContext);
