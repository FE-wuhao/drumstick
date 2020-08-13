import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from './Alert';
const defaultOptions = {
  onclick: jest.fn(),
};

describe('Alert测试用例', () => {
  test('测试关闭按钮点击', () => {
    const wrapper = render(
      <Alert {...defaultOptions} type='danger' title='danger' />
    );
    const ele = wrapper.getByText('x');
    // expect(ele).toHaveClass('alert alert-danger alert-sm');
    fireEvent.click(ele);
    expect(defaultOptions.onclick).toHaveBeenCalled();
  });
});
