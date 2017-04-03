import React from 'react';

import Button from '../Button.jsx';

export default function BG6 (props) {
  return (
    <Button
      widthType   = "square"
      heightType  = "large"
      roundedType = "all"
      bgType      = "google-plus"
      icon        = "google-plus"
      {...props}
    >
      {props.children}
    </Button>
  );
}
