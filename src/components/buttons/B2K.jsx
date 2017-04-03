import React from 'react';

import Button from '../Button.jsx';

export default function B2K (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "large"
      roundedType = "bottom"
      bgType      = "2"
      {...props}
    >
      {props.children}
    </Button>
  );
}
