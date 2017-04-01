import React    from 'react';

import Textarea from '../Textarea.jsx';

export default function TA6 (props) {
  return (
    <Textarea
      size = "medium"
      showTextareaIcon
      showSymbolsCounter
      {...props}
    />
  );
};
