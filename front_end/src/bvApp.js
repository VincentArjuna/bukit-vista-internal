import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import PublicRoutes from './router';
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import themes from './settings/themes';
import AppLocale from './languageProvider';
import { themeConfig } from './settings';
import BvAppHolder from './bvAppStyle';
import Boot from './redux/boot';

const currentAppLocale =
  AppLocale["en"];

const BvApp = () => (
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <BvAppHolder>
          <Provider store={store}>
            <PublicRoutes history={history} />
          </Provider>
        </BvAppHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
);
Boot()
  .then(() => BvApp())
  .catch(error => console.error(error));

export default BvApp;
export { AppLocale };
