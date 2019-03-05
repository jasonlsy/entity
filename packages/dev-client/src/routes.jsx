import PropTypes from 'prop-types';
import React from 'react';
import { AppliedRoute } from '@apps/auth';
import { Navigation } from '@gnowth/app';
import { Switch, Redirect } from 'react-router-dom';

import settings from 'settings';

const AppPages = React.lazy(() => import('apps/pages'));
const AppObservation = React.lazy(() => import('apps/observation'));

const Routes = props => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Navigation
      name="screen"
      palette="secondary"
      paletteAsBackground
      variant="flat"
    />

    <Switch>
      <AppliedRoute
        path="/pages"
        component={AppPages}
      />

      { settings.ENABLE_FEATURE_OBSERVATION && (
        <AppliedRoute
          path="/observation"
          component={AppObservation}
          componentProps={{ routeNotFound: props.routeNotFound }}
        />
      )}

      <Redirect from="/" to="/pages/readme" exact />

      <Redirect to={props.routeNotFound} />
    </Switch>
  </React.Suspense>
);

Routes.propTypes = {
  routeNotFound: PropTypes.string,
};

Routes.defaultProps = {
  routeNotFound: '/pages/notfound',
};

export default Routes;
