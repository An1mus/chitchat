import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders the app', async () => {
  // this is a workaround for issue #1695 in jsdom
  window.HTMLElement.prototype.scrollIntoView = function() {};

  const {container} = await render(<App />);
  expect(container.querySelector('h1')).toHaveTextContent('Welcome to ChitChat')
});
