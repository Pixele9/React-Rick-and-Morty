import React, { useContext } from 'react';

import './index.css';

import Header from './components/Header';
import Characters from './components/Characters';

import ThemeContext from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  const backgroundClass = theme ? "App dark" : "App light"

  return (
    <div className={backgroundClass}>
      <Header />
      <Characters />
      {/* <h1>Hello World</h1> */}
    </div>
  );
}

export default App;
