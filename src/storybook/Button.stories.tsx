import type { ComponentStory, Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Click Me!</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  fill: 'solid',
  disabled: false,
};

// export const Primary: Story = {
//   args: {
//   },
// };
