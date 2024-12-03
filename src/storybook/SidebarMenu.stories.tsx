import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SidebarMenu, MenuItem } from '../components/SidebarMenu';

export default {
  title: 'Sidebar',
  component: SidebarMenu,
} as ComponentMeta<typeof SidebarMenu>;

const items: MenuItem[] = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'About',
  },
  {
    id: 3,
    title: 'Services',
    items: [
      {
        id: 31,
        title: 'Service 1',
      },
      {
        id: 32,
        title: 'Service 2',
        items: [
          {
            id: 321,
            title: 'Service 2.1',
          },
        ],
      },
      {
        id: 33,
        title: 'Service 3',
      },
    ],
  },
  {
    id: 4,
    title: 'Contact',
  },
];

const Template: ComponentStory<typeof SidebarMenu> = (args) => <SidebarMenu {...args} />;

export const SidebarExample = Template.bind({});
SidebarExample.args = { items: items, open: true };
