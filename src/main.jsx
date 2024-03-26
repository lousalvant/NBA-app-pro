import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataList from './components/DataList';
import PlayerDetail from './components/PlayerDetail';
import App from './App.jsx'
// import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<DataList />} />
      <Route path="/player/:id" element={<PlayerDetail />} />
    </Routes>
  </Router>
)
