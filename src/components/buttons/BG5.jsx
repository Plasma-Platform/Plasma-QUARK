import React from 'react';

import Button from '../Button.jsx';

export default function BG5 (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "google-plus"
      icon        = "google-plus"
      {...props}
    >
      {props.children}
    </Button>
  );
}
