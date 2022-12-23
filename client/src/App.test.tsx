import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  // this is a workaround for issue #1695 in jsdom
  window.HTMLElement.prototype.scrollIntoView = function() {};

  const {container} = render(<App />);
  expect(container.querySelector('h1')).toHaveTextContent('Welcome to ChitChat')
});
