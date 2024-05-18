import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/Home';
import LoginPage from './pages/Login'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}