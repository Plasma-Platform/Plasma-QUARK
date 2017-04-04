import React from 'react';

import Button from '../Button.jsx';

export default function BF3 (props) {
  return (
    <Button
      widthType   = "auto"
      heightType  = "large"
      roundedType = "all"
      bgType      = "facebook"
      icon        = "facebook"
      {...props}
    >
      {props.children}
    </Button>
  );
}
