We setup loading styles in project bundle for clear [CSS](https://github.com/webpack/css-loader)(what also must include[styles-loader](https://github.com/webpack/style-loader)), [SASS](http://sass-lang.com/) compiller and [CSS modules](https://github.com/css-modules/css-modules) with [postcss-loader](https://github.com/postcss/postcss-loader).

## CSS-modules

### Modules instruction:

1. Create styles file, like `some-styles.scss`(with `.someClass { ... }`);
2. Require it for component, like `import styles from './path-to-styles/some-styles.scss'`;
3. Then pass class names in your JSX like `<div className={styles.someClass}></div>`.

### Global styles:

Use `:global {}` scope for global styles, like:

```
:global {
  body {
    margin: 0px;
  }
}
```
