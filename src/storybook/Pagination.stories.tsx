import { Meta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Pagination } from '../components/Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  parameters: { actions: { argTypesRegex: '^set.*' } },
} as Meta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const PaginationExample = Template.bind({});
PaginationExample.args = { pages: 10, page: 1, variant: 'primary', maxItems: 7 };
