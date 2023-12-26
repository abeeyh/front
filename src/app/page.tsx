'use client';
import LoginForm from './components/molecules/LoginForm/LoginForm';
// import { ThemeSwitcher } from './providers/ThemeProvider/ThemeProvider';
import ToggleColorMode from './providers/ThemeProvider/ToggleColorMode';

export default function Home() {
  return (
    <ToggleColorMode>
      <LoginForm />
      {/* <ThemeSwitcher /> */}
    </ToggleColorMode>
  );
}
