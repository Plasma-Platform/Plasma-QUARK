import React from 'react';

import Button from '../Button.jsx';

export default function BT5 (props) {
  return (
    <Button
      widthType   = "square"
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
