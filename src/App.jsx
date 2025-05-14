// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContabilidadProvider } from './context/ContabilidadContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Temas from './pages/Temas';
import DetallesTema from './pages/DetallesTema';
import Dinamicas from './pages/Dinamicas';

function App() {
  return (
    <ContabilidadProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/temas" element={<Temas />} />
              <Route path="/temas/:id" element={<DetallesTema />} />
              <Route path="/dinamicas" element={<Dinamicas />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ContabilidadProvider>
  );
}

export default App;