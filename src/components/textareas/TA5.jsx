import React    from 'react';

import Textarea from '../Textarea.jsx';

export default function TA5 (props) {
  return (
    <Textarea
      size = "medium"
      showSymbolsCounter
      {...props}
    />
  );
};
