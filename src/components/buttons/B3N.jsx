import React from 'react';

import Button from '../Button.jsx';

export default function B3N (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "large"
      roundedType = "all"
      bgType      = "3"
      {...props}
    >
      {props.children}
    </Button>
  );
}
