import React from 'react';
import {storiesOf} from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import PageLayout from './PageLayout';

storiesOf('PageLayout', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <PageLayout
      noSides={boolean('No side margins', false)}
      noTop={boolean('No top margin', false)}
      noBottom={boolean('No bottom margin', false)}
    >
      Hello
    </PageLayout>
  ));
