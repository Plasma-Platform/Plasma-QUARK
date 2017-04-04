import React from 'react';

import Button from '../Button.jsx';

export default function B1G (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "1"
      {...props}
    >
      {props.children}
    </Button>
  );
}
