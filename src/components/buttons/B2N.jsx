import React from 'react';

import Button from '../Button';

const B2N = props => (
  <Button
    widthType="square"
    heightType="large"
    roundedType="all"
    bgType="2"
    {...props}
  />
);

export default B2N;
