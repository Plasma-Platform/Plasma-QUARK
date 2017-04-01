import React    from 'react';

import Textarea from '../Textarea.jsx';

export default function TA4 (props) {
  return (
    <Textarea
      size = "large"
      showTextareaIcon
      {...props}
    />
  );
};
