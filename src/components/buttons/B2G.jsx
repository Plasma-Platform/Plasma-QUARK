import React from 'react';

import Button from '../Button.jsx';

export default function B2G (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "2"
      {...props}
    >
      {props.children}
    </Button>
  );
}
