import React from 'react';

import Button from '../Button.jsx';

export default function BF5 (props) {
  return (
    <Button
      widthType    = "square"
      heightType   = "medium"
      roundedType  = "all"
      bgType       = "facebook"
      icon         = "facebook"
      {...props}
    >
      {props.children}
    </Button>
  );
}
