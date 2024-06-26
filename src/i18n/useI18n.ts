import { useContext } from 'react';
import { I18nContext } from './I18nContext';

export const useI18n = () => useContext(I18nContext);
