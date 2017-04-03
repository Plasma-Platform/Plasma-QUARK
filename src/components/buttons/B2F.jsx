import React from 'react';

import Button from '../Button.jsx';

export default function B2F (props) {
  return (
    <Button
      widthType   = "auto"
      heightType  = "large"
      roundedType = "all"
      bgType      = "2"
      {...props}
    >
      {props.children}
    </Button>
  );
}
