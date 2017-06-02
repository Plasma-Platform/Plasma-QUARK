import React from 'react';

import Button from '../Button.jsx';

export default function B3E (props) {
  return (
    <Button
      widthType   = "auto"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "3"
      {...props}
    >
      {props.children}
    </Button>
  );
}
