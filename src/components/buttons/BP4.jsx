import React from 'react';

import Button from '../Button.jsx';

export default function BP4 (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "large"
      roundedType = "all"
      bgType      = "pinterest"
      icon        = "pinterest"
      {...props}
    >
      {props.children}
    </Button>
  );
}
