import React    from 'react';

import Textarea from '../Textarea.jsx';

export default function TA8 (props) {
  return (
    <Textarea
      size = "large"
      showTextareaIcon
      showSymbolsCounter
      {...props}
    />
  );
};
