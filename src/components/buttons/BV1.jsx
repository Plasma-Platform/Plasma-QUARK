import React from 'react';

import Button from '../Button.jsx';

export default function BV1 (props) {
  return (
    <Button
      widthType   = "auto"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "vk"
      icon        = "vk"
      {...props}
    >
      {props.children}
    </Button>
  );
}
