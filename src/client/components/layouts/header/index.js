import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

const HeaderWrapper = props => <Header items={props.items} />;

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(HeaderWrapper);
