import React from 'react';

import Button from '../Button.jsx';

export default function B3J (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "medium"
      roundedType = "bottom"
      bgType      = "3"
      {...props}
    >
      {props.children}
    </Button>
  );
}
