import { ReactNode } from 'react';
interface ThemeConfigProps {
    dark?: object;
    light?: object;
}
interface GatsbyRootProps {
    element: ReactNode;
}
export declare const wrapRootElement: (gatsbyRootProps: GatsbyRootProps, themeProps: ThemeConfigProps) => JSX.Element;
export {};
