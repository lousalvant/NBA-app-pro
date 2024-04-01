import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataList from './components/DataList';
import PlayerDetail from './components/PlayerDetail';
import App from './App.jsx'
import Layout from '../routes/Layout.jsx';
// import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/player/:selectedTeam/:id" element={<PlayerDetail />} />
      </Route>
    </Routes>
  </Router>
);
