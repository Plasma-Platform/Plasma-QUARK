import React from 'react';

import Button from '../Button.jsx';

export default function B2I (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "medium"
      roundedType = "bottom"
      bgType      = "2"
      {...props}
    >
      {props.children}
    </Button>
  );
}
