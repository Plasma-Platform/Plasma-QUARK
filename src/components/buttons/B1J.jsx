import React from 'react';

import Button from '../Button.jsx';

export default function B1J (props) {
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
