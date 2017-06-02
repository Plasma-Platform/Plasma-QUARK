import React from 'react';

import Button from '../Button.jsx';

export default function BT4 (props) {
  return (
    <Button
      widthType   = "full"
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
