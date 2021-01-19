import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NotificationProvider from './commons/providers/NotificationProvider';
import LoadingProvider from './commons/providers/LoadingProvider';
import Notification from './components/Notification';
import Loading from './components/Loading';

import GlobalStyle from './styles';
import Routes from './routes';

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <NotificationProvider>
        <LoadingProvider>
          <BrowserRouter>
            <Routes />
            <Loading />
            <Notification />
          </BrowserRouter>
        </LoadingProvider>
      </NotificationProvider>
    </>
  );
}

export default App;
