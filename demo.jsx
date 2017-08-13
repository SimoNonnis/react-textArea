import React from 'react';

import TextArea from './index';

function onBlur(content) {
  console.log('TextAreaContent: ', content);
}

function TextAreaDemo() {
  return (
    <TextArea
      label="Directions"
      placeholder="Please provide directions if your property is difficult to find."
      id="yourID"
      onBlur={onBlur}
    />
  );
}

export default TextAreaDemo;
