import React, { ReactNode, useContext } from 'react';

import { ThemeProvider } from 'emotion-theming';

import { ThemeManagerContext } from './theme-manager';

interface Props {
    children: ReactNode;
    darkTheme: object;
    lightTheme: object;
}

export const EmotionThemeProvider = (props: Props) => {
    const { children, darkTheme, lightTheme } = props;

    const themeManagerContext = useContext(ThemeManagerContext);

    const isDark = themeManagerContext.isDark;
    const currentTheme = isDark ? darkTheme : lightTheme;
    const theme = { ...currentTheme, isDark };

    return (
        <ThemeProvider theme={theme}>
            <>{children}</>
        </ThemeProvider>
    );
};
