"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeManagerProvider = exports.ThemeManagerContext = void 0;
var react_1 = __importStar(require("react"));
var defaultState = {
    isDark: false,
    toggleDark: function () { return undefined; },
};
exports.ThemeManagerContext = react_1.createContext(defaultState);
var supportsDarkMode = function () {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
var ThemeManagerProvider = function (props) {
    var _a = react_1.useState(false), isDark = _a[0], setIsDark = _a[1];
    var toggleDark = function (value) {
        var toggledTheme = value !== null && value !== void 0 ? value : !isDark;
        setIsDark(toggledTheme);
        localStorage.setItem('dark', JSON.stringify(toggledTheme));
    };
    react_1.useEffect(function () {
        var themeFromLocalStorage = localStorage.getItem('dark');
        if (typeof themeFromLocalStorage === 'string') {
            setIsDark(JSON.parse(themeFromLocalStorage));
        }
        else if (supportsDarkMode()) {
            setIsDark(true);
        }
    }, []);
    return (react_1.default.createElement(exports.ThemeManagerContext.Provider, { value: {
            isDark: isDark,
            toggleDark: toggleDark,
        } }, props.children));
};
exports.ThemeManagerProvider = ThemeManagerProvider;
