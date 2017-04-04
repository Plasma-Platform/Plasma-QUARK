import React from 'react';

import Button from '../Button.jsx';

export default function B2M (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "2"
      {...props}
    >
      {props.children}
    </Button>
  );
}
