# muse-ui-carbon-theme

Muse-UI carbon theme

## Installation

```bash
npm install -S muse-ui-carbon-theme
// or
yarn add muse-ui-carbon-theme
```

## CDN

```html
<script src="https://unpkg.com/muse-ui-carbon-theme/dist/muse-ui-carbon-theme.js"></script>
```


## Usage

```javascript
import { theme } from 'muse-ui'
import { carbon, createTheme } from '../src';

theme.add('carbon', carbon)
  .addCreateTheme(createTheme)
  .use('carbon');
```

## Licence

muse-ui-carbon-theme is open source and released under the MIT Licence.

Copyright (c) 2018 myron
