import React from 'react';

import { NavBar, Icon } from 'antd-mobile';

const Header = props => (
  <NavBar
    leftContent="back"
    mode="dark"
    onLeftClick={() => console.log('onLeftClick')}
    rightContent={[<Icon key="1" type="ellipsis" />]}
  >
    NavBar
  </NavBar>
);

export default Header;
