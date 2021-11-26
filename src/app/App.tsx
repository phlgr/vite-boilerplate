import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles['app-header']}>
          <img src={logo} className={styles['app-logo']} alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className={styles['app-link']}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className={styles['app-link']}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <Routes>
            <Route path="/about">
              <main>About</main>
            </Route>
            <Route path="/">
              <main>Home</main>
            </Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
