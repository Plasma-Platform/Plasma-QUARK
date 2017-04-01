import React    from 'react';

import Textarea from '../Textarea.jsx';

export default function TA7 (props) {
  return (
    <Textarea
      size = "large"
      showSymbolsCounter
      {...props}
    />
  );
};
