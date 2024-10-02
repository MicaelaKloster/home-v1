/* jshint ignore: start */
import React from 'react';
import { ThemeProvider } from "@material-tailwind/react";
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;