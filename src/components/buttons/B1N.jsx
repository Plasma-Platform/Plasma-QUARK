import React from 'react';

import Button from '../Button.jsx';

export default function B1N (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "large"
      roundedType = "all"
      bgType      = "1"
      {...props}
    >
      {props.children}
    </Button>
  );
}
