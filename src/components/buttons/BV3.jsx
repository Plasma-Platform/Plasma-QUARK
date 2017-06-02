import React from 'react';

import Button from '../Button.jsx';

export default function BV3 (props) {
  return (
    <Button
      widthType   = "auto"
      heightType  = "large"
      roundedType = "all"
      bgType      = "vk"
      icon        = "vk"
      {...props}
    >
      {props.children}
    </Button>
  );
}
