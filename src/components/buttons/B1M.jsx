import React from 'react';

import Button from '../Button.jsx';

export default function B1M (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "1"
      {...props}
    >
      {props.children}
    </Button>
  );
}
