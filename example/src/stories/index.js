import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FOB } from 'tang-ui/FOB'

import { PlusIcon } from 'tang-ui/Icons'

storiesOf('Welcome', module)
  .add('Floating Action Button', () => (
    <FOB>
      <PlusIcon/>
    </FOB>
  ));
