import React from 'react';

import Button from '../Button.jsx';

export default function BF4 (props) {
  return (
    <Button
      widthType    = "full"
      heightType   = "large"
      roundedType  = "all"
      bgType       = "facebook"
      icon         = "facebook"
      {...props}
    >
      {props.children}
    </Button>
  );
}
