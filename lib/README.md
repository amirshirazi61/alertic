# alertic

A simple Node.js alert module.

## Installation

```sh
npm install alertic --save
```

## Usage

### Javascript

```javascript
var alertic = require('alertic');
const optionalDisplayTimeInSeconds = 3;
alertic.success('Your success message', optionalDisplayTimeInSeconds);
alertic.error('Your error message', optionalDisplayTimeInSeconds);
```

### TypeScript

```typescript
import { alertic, genericErrorMessage } from 'alertic';
alertic.error(genericErrorMessage);
```
