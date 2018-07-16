# alertic

A simple Node.js alert module.

## Introduction

alertic is a tiny JavaScript module for displaying messages in different modes (success, error and warning).
It accepts optional display time in seconds as input parameter. If the time is omitted, a close icon will appear on the top right corner of the box. Clicking on it will remove the box from the DOM.

### Note

Please make sure that the **body** tag exists in your HTML.

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
alertic.warning('This is a warning message!');
```
