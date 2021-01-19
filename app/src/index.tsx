import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { getNavigatorLanguage, getTranslations } from './helper';
import App from './App';

ReactDOM.render(
  <IntlProvider locale={getNavigatorLanguage()} messages={getTranslations()}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
