import React from 'react';

import Button from '../Button.jsx';

export default function B2N (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "large"
      roundedType = "all"
      bgType      = "2"
      {...props}
    >
      {props.children}
    </Button>
  );
}
