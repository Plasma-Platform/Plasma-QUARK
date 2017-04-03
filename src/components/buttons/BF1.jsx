import React from 'react';

import Button from '../Button.jsx';

export default function BF1 (props) {
  return (
    <Button
      widthType   = "auto"
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
