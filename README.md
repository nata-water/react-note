- React の勉強のために作っている

![React Note](https://i.imgur.com/mMALN87.png)

- 実行方法

```shell
$ npm i
$ npm start
```

## React 18 対応メモ

- Package.json のバージョン更新

```json
    "@types/react": "^17.0.43",
    "@types/react-dom": "^17.0.14",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
```

* npm install実行

```shell
$ npm i
```

- index.tsx の変更

```tsx
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
```
