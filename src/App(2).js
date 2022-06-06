import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import Index from './components/layouts/Index';
import Hasil from './components/layouts/Hasil';
import Detail from './components/layouts/Detail';
import Login from './components/layouts/Login';
import Register from './components/layouts/Register';

import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hasil-pencarian/:tipe" element={<Hasil />} />
          <Route path="/detail-mobil/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
