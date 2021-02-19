import { ReactNode } from 'react';
interface Props {
    children?: ReactNode;
    darkTheme: object;
    lightTheme: object;
}
export declare const EmotionThemeProvider: (props: Props) => JSX.Element;
export {};
