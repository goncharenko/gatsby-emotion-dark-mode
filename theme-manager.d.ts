import React, { ReactNode } from 'react';
interface Props {
    children?: ReactNode;
}
interface ThemeManager {
    isDark: boolean;
    toggleDark(value?: boolean): void;
}
export declare const ThemeManagerContext: React.Context<ThemeManager>;
export declare const ThemeManagerProvider: (props: Props) => JSX.Element;
export {};
