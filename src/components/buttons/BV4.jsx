import React from 'react';

import Button from '../Button.jsx';

export default function BV4 (props) {
  return (
    <Button
      widthType   = "full"
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
