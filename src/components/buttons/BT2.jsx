import React from 'react';

import Button from '../Button.jsx';

export default function BT2 (props) {
  return (
    <Button
      widthType   = "full"
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
