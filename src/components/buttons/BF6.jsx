import React from 'react';

import Button from '../Button.jsx';

export default function BF6 (props) {
  return (
    <Button
      widthType   = "square"
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
