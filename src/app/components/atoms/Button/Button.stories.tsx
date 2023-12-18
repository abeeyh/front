import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Input Label',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    label: 'Input Label',
    variant: 'text',
  },
};

export const Contained: Story = {
  args: {
    label: 'Input Label',
    variant: 'contained',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    ...Outlined.args,
    disabled: true,
  },
};

export const TextDisabled: Story = {
  args: {
    ...Text.args,
    disabled: true,
  },
};

export const ContainedDisabled: Story = {
  args: {
    ...Contained.args,
    disabled: true,
  },
};
