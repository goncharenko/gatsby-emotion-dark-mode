"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.EmotionThemeProvider = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@emotion/react");
var theme_manager_1 = require("./theme-manager");
var EmotionThemeProvider = function (props) {
    var children = props.children, darkTheme = props.darkTheme, lightTheme = props.lightTheme;
    var themeManagerContext = react_1.useContext(theme_manager_1.ThemeManagerContext);
    var isDark = themeManagerContext.isDark;
    var currentTheme = isDark ? darkTheme : lightTheme;
    var theme = __assign(__assign({}, currentTheme), { isDark: isDark });
    return (react_1.default.createElement(react_2.ThemeProvider, { theme: theme },
        react_1.default.createElement(react_1.default.Fragment, null, children)));
};
exports.EmotionThemeProvider = EmotionThemeProvider;
