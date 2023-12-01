import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header.";
import { Celebrity } from "./pages/Celebrity";
import { Movies } from './pages/Movies';
import { Tv } from './pages/Tv';
import { Home } from './pages/Home';
import { AdPage } from './Components/AdPage';
import { Login } from './pages/Login';
import { Weather } from './pages/Weather';

import { Provider } from 'react-redux';
import { store } from './store.js';
const App = () => {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: 'white' }}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/celebrity" element={<Celebrity />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/TVprogram" element={<Tv />} />
            <Route path='/adpage' element={<AdPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/weather' element={<Weather />} />
          </Routes>
        </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;