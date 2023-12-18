'use client';
import { ThemeSwitcher } from './providers/ThemeProvider/ThemeProvider';
import ToggleColorMode from './providers/ThemeProvider/ToggleColorMode';

export default function Home() {
  return (
    <ToggleColorMode>
      <ThemeSwitcher />
    </ToggleColorMode>
  );
}
