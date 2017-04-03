import React from 'react';

import Button from '../Button.jsx';

export default function BP3 (props) {
  return (
    <Button
      widthType   = "auto"
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
