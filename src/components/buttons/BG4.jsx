import React from 'react';

import Button from '../Button.jsx';

export default function BG4 (props) {
  return (
    <Button
      widthType   = "full"
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
