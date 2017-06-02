import React from 'react';

import Button from '../Button.jsx';

export default function B3H (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "large"
      roundedType = "all"
      bgType      = "3"
      {...props}
    >
      {props.children}
    </Button>
  );
}
