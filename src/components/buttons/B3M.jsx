import React from 'react';

import Button from '../Button.jsx';

export default function B3M (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "3"
      {...props}
    >
      {props.children}
    </Button>
  );
}
