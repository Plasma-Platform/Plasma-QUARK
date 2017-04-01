import React    from 'react';

import Textarea from '../Textarea.jsx';

export default function TA2 (props) {
  return (
    <Textarea
      size = "medium"
      showTextareaIcon
      {...props}
    />
  );
};
