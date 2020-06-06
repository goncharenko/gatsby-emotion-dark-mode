![David](https://img.shields.io/david/dev/goncharenko/gatsby-emotion-dark-mode)

# Gatsby Emotion Dark Mode

A Gatsby plugin for toggling dark mode and injecting themes using emotion.

based on <https://github.com/gperl27/gatsby-styled-components-dark-mode>

## Installation

Install the package

`$ npm i gatsby-emotion-dark-mode`

or

`$ yarn add gatsby-emotion-dark-mode`

Add the plugin to your `gatsby-config.js`

```javascript
module.exports = {
    plugins: [
        {
            resolve: `gatsby-emotion-dark-mode`,
            options: {
                light: { mainColor: 'brandyRose' },
                dark: { mainColor: 'manatee' },
            },
        },
    ],
};
```

## Requirements

You must have the following installed in your gatsby project:

-   [emotion](https://emotion.sh/)
    -   Use this [plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/) for gatsby integration

## Usage

The plugin expects **two** options in your `gatsby-config.js` file:

```typescript
light: object;
dark: object;
```

### Accessing the styles

We can now utilize the power of emotion. Any component wrapped in a `styled` has access to your theme!

in a component

```typescript
const MyLightOrDarkComponent = styled.div`
    background-color: ${(props) => props.theme.mainColor};
`;
```

In `theme` you'll also have access to `isDark`

So you could do conditionally styling _inside_ your components if you wanted to

```typescript
const MyLightOrDarkComponent = styled.div`
    color: ${(props) =>
        props.theme.isDark ? props.theme.darkColor : props.theme.lightColor};
`;
```

### Toggling the theme

Somewhere in your app, you'll want to provide functionality to actually change the theme from one theme to the other, or to respect the current system dark mode setting.

The plugin exposes this functionality through `ThemeManagerContext`

Consuming the context will get you access to

| prop       | type                      | description                                             |
| ---------- | ------------------------- | ------------------------------------------------------- |
| isDark     | boolean                   | state that describes if your app is in dark mode or not |
| toggleDark | (value?: boolean) => void | function that toggles dark/light mode                   |

#### Example - light/dark mode toggle

in a presumed `src/component/layout.tsx`

```typescript
import { ThemeManagerContext } from 'gatsby-emotion-dark-mode';

export const Layout = (props) => {
    let theme = useContext(ThemeManagerContext);

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    onChange={() => theme.toggleDark()}
                    checked={theme.isDark}
                />
                Dark mode
            </label>
        </div>
    );
};
```
