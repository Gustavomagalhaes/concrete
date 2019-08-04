import React from 'react';
import { render } from 'react-testing-library';

import Search from '../index';

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<Search id={id} />);
    expect(container.querySelector('span').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<Search>{children}</Search>);
    const { childNodes } = container.querySelector('span');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
