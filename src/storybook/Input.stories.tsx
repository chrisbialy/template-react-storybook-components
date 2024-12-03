import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Input } from '../components/Form';

export default {
  title: 'Form',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SimpleInput = Template.bind({});
SimpleInput.args = { label: 'Adres', placeholder: 'Podaj adres' };

export function InputInForm() {
  const [value, setValue] = React.useState<string>('');
  return (
    <form>
      <div>Podany adres to: {value || '<brak>'}</div>
      <Input
        label="Adres"
        placeholder="Podaj adres"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={value === 'bad street' ? 'Niepoprawna ulica' : undefined}
      />
    </form>
  );
}
