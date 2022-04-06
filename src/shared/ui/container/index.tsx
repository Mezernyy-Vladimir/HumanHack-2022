import React, { FC } from 'react';

import './style.scss';

interface IProps {
  height?: boolean;
}

const Container: FC<IProps> = ({ children, height }) => (
  <div className={height ? 'container height' : 'container'}>{children}</div>
);

export default Container;
