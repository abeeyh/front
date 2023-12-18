import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from './ToggleColorMode';
import { ThemeSwitcher } from './ThemeProvider';

const meta = {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'node' },
  },
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: <ThemeSwitcher />,
  },
};

export const Dark: Story = {
  args: {
    children: <ThemeSwitcher />,
  },
};
