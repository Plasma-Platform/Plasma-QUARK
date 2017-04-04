import React from 'react';

import Button from '../Button.jsx';

export default function BT1 (props) {
  return (
    <Button
      widthType   = "auto"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "twitter"
      icon        = "twitter"
      {...props}
    >
      {props.children}
    </Button>
  );
}
