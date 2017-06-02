import React from 'react';

import Button from '../Button.jsx';

export default function BP5 (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "pinterest"
      icon        = "pinterest"
      {...props}
    >
      {props.children}
    </Button>
  );
}
