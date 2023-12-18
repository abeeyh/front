import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './ThemeProvider';

export default function ToggleColorMode({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: mode === 'light' ? '#0085ff' : '#ffffff',
          },
          secondary: {
            main: mode === 'light' ? '#f50057' : '#ff4081',
          },
          error: {
            main: '#f44336',
          },
          warning: {
            main: '#ff9800',
          },
          info: {
            main: '#2196f3',
          },
          success: {
            main: '#4caf50',
          },
          background: {
            default: mode === 'light' ? '#ffffff' : '#2b2b2b',
            paper: mode === 'light' ? '#f5f5f5' : '#424242',
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#ffffff',
            secondary: mode === 'light' ? '#757575' : '#bdbdbd',
            disabled: mode === 'light' ? '#9e9e9e' : '#757575',
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
