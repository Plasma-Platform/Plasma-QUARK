import React from 'react';

import Button from '../Button.jsx';

export default function B1F (props) {
  return (
    <Button
      widthType   = "auto"
      heightType  = "large"
      roundedType = "all"
      bgType      = "1"
      {...props}
    >
      {props.children}
    </Button>
  );
}
