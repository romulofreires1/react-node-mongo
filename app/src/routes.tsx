import React, { Suspense, lazy, ReactElement } from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import Loading from 'components/Loading';

const ReturnOnInvestment = lazy(
  () => import('./pages/calculator/ReturnOnInvestment')
);
const Signup = lazy(() => import('./pages/Signup'));
const Signin = lazy(() => import('./pages/Signin'));

const Container = lazy(() => import('./components/Container'));

function Routes(): ReactElement {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading forceLoading />}>
        <Route
          path="/"
          exact
          render={() => (
            <Container>
              <ReturnOnInvestment />
            </Container>
          )}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Routes;
