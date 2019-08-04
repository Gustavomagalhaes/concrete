import React from 'react';
import { render } from 'react-testing-library';

import UserNotFound from '../index';

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<UserNotFound id={id} />);
    expect(container.querySelector('span').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<UserNotFound>{children}</UserNotFound>);
    const { childNodes } = container.querySelector('span');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
