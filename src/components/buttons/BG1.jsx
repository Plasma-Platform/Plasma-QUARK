import React from 'react';

import Button from '../Button.jsx';

export default function BG1 (props) {
  return (
    <Button
      widthType   = "auto"
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
