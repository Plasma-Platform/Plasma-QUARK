import React from 'react';

import Field from '../Field.jsx';

export default function F4 (props) {
  return (
    <Field
      size = "large"
      showInputIcon
      showPlaceholderOnInput
      {...props}
    />
  );
};
