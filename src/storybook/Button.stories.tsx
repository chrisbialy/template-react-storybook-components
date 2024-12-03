import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>I'm a button</Button>;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', fill: 'solid', disabled: false };
