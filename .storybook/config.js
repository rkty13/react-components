import {configure} from '@storybook/react';

import '../src/main.scss';

const req = require.context('../src', true, /\.stories\.jsx?$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
