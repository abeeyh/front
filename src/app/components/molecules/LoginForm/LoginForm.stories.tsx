import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

const meta = {
  title: 'molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
