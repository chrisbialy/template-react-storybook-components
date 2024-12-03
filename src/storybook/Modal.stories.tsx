import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Modal } from '../components/Modal';
import { Button } from '../components/Button';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    onClose: { action: 'onClose' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <>
      {!args.open && <>Set "open" props to see the modal</>}
      <Modal
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => args.onClose?.()}>Submit</Button>
          </div>
        }
        {...args}
      />
    </>
  );
};

export const ModalExample = Template.bind({});
ModalExample.args = {
  title: 'Example Modal',
  open: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.',
};
