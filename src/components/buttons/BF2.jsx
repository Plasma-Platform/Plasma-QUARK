import React from 'react';

import Button from '../Button.jsx';

export default function BF2 (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "facebook"
      icon        = "facebook"
      {...props}
    >
      {props.children}
    </Button>
  );
}
