import React from 'react';

import Button from '../Button.jsx';

export default function B3I (props) {
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
