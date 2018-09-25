import PropTypes from 'prop-types';
import PropTypesDuck from '@gnowth/prop-types-duck';
import PropTypesPlus from '@gnowth/prop-types-plus';
import React from 'react';
import { QueryDuck } from '@gnowth/entity-duck';

import EntityScreenLocal from 'apps/snippet/entities/ScreenLocal';
import FormMain from 'apps/snippet/forms/Main';

import * as styles from './styles';

const ScreenLocal = props => (
  <div className={styles.screen}>
    <QueryDuck
      action={props.entity.duck.get}
      component={props.formComponent}
      componentProps={props.formComponentProps}
    />
  </div>
);

ScreenLocal.propTypes = {
  entity: PropTypesDuck.entity,
  formComponent: PropTypesPlus.component,
  formComponentProps: PropTypes.shape({}),
};

ScreenLocal.defaultProps = {
  entity: EntityScreenLocal,
  formComponent: FormMain,
  formComponentProps: {},
};

export default ScreenLocal;
