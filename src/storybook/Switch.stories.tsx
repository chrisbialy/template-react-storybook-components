import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Switch } from '../components/Form';

export default {
  title: 'Form',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SimpleSwitch = Template.bind({});
SimpleSwitch.args = { label: 'Czy chcesz subskrybować kanał?', error: 'Pole jest wymagane.' };
