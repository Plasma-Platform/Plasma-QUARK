import React from 'react';

import Button from '../Button.jsx';

export default function B2E (props) {
  return (
    <Button
      widthType   = "auto"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "2"
      {...props}
    >
      {props.children}
    </Button>
  );
}
