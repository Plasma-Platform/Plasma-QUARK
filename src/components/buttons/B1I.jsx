import React from 'react';

import Button from '../Button.jsx';

export default function B1I (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "medium"
      roundedType = "bottom"
      bgType      = "1"
      {...props}
    >
      {props.children}
    </Button>
  );
}
