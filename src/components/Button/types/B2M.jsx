import React from 'react';

import Button from '../Button';

const B2M = props => (
  <Button
    widthType="square"
    heightType="medium"
    roundedType="all"
    bgType="2"
    {...props}
  />
);

export default B2M;
