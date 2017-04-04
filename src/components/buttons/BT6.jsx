import React from 'react';

import Button from '../Button.jsx';

export default function BT6 (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "large"
      roundedType = "all"
      bgType      = "twitter"
      icon        = "twitter"
      {...props}
    >
      {props.children}
    </Button>
  );
}
