import React from 'react';

import Button from '../Button.jsx';

export default function BG3 (props) {
  return (
    <Button
      widthType   = "auto"
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
