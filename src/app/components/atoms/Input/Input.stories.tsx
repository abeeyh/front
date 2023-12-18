import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    onChange: { control: 'function' },
    variant: { control: 'text' },
    type: { control: 'text' },
    helper: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Input Label',
    value: '',
    onChange: () => {},
    variant: 'outlined',
    type: 'text',
    helper: '',
  },
};

export const Standard: Story = {
  args: {
    ...Outlined.args,
    variant: 'standard',
  },
};

export const Filled: Story = {
  args: {
    ...Outlined.args,
    variant: 'filled',
  },
};

export const OutlinedNumber: Story = {
  args: {
    ...Outlined.args,
    type: 'number',
    label: 'Input Number',
  },
};

export const StandardNumber: Story = {
  args: {
    ...Standard.args,
    type: 'number',
    label: 'Input Number',
  },
};

export const FilledNumber: Story = {
  args: {
    ...Filled.args,
    type: 'number',
    label: 'Input Number',
  },
};
