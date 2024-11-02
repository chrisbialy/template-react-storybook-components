/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { ComponentStory, Meta } from '@storybook/react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import examplePhoto from './images/examplePhoto.jpg';

export default {
  component: Card,
} as Meta<typeof Card>;

const customStyle = css`
  border: '1px solid #4fb0d2';
  width: 300px;
`;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} css={customStyle} />;

export const CardExample = Template.bind({});
CardExample.args = {
  title: 'Hello World',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex ligula, elementum ut varius in, ornare quis nibh.',
  image: examplePhoto,
  children: 'Custom content',
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'Hello world',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  image: examplePhoto,
  title: 'Hello world',
};

export const WithButton = Template.bind({});
WithButton.args = {
  image: examplePhoto,
  title: 'Hello world',
  description: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <Button>Click me</Button>
    </>
  ),
};
