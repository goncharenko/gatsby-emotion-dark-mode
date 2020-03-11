import React, { ReactNode } from 'react';

import { EmotionThemeProvider } from './emotion-theme-provider';
import { ThemeManagerProvider } from './theme-manager';

interface ThemeConfigProps {
  dark?: object;
  light?: object;
}

interface GatsbyRootProps {
  element: ReactNode;
}

export const wrapRootElement = (
  gatsbyRootProps: GatsbyRootProps,
  themeProps: ThemeConfigProps,
) => {
  const { dark = {}, light = {} } = themeProps;

  return (
    <ThemeManagerProvider>
      <EmotionThemeProvider lightTheme={light} darkTheme={dark}>
        {gatsbyRootProps.element}
      </EmotionThemeProvider>
    </ThemeManagerProvider>
  );
};
