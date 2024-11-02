import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { HeaderConfig, Table } from '../components/Table';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const headers: HeaderConfig[] = [
  { title: 'Name', formatter: (name) => (typeof name === 'string' ? name.toUpperCase() : name) },
  { title: 'Age' },
  { title: 'Email' },
];

const data = [
  ['John Smith', 25, 'john@example.com'],
  ['Jane Doe', 30, 'jane@example.com'],
  ['Bob Johnson', 45, 'bob@example.com'],
];

export const TableExample = Template.bind({});
TableExample.args = { data, headers };
