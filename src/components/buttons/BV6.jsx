import React from 'react';

import Button from '../Button.jsx';

export default function BV6 (props) {
  return (
    <Button
      widthType   = "square"
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
