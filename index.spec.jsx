/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import TextArea from './index';

describe('Test <TextArea />', () => {
  let wrapper;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    wrapper = shallow(
      <TextArea
        label="Directions"
        placeholder="Please provide directions if your property is difficult to find."
        id="yourID"
        onChange={callback}
      />,
    );
  });

  it('should find the text of the label tag', () => {
    expect(wrapper.find('.title').text()).toBe('Directions');
  });

  it('should find a textarea tag', () => {
    expect(wrapper.find('.textarea')).toHaveLength(1);
  });

  it('should invoke the callback', () => {
    const content = 'test content';
    const textarea = wrapper.find('.textarea');

    expect(callback.mock.calls.length).toBe(0);

    textarea.simulate('change', { target: { value: content } });

    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.calls[0][0]).toEqual(content);
  });
});
