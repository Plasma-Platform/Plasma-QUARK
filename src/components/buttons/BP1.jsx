import React from 'react';

import Button from '../Button.jsx';

export default function BP1 (props) {
  return (
    <Button
      widthType   = "auto"
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
