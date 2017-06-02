import React from 'react';

import Button from '../Button.jsx';

export default function BP6 (props) {
  return (
    <Button
      widthType   = "square"
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
