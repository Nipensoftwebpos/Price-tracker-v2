import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import Competitor from './pages/Competitor';
import Integration from './pages/Integration';
import Report from './pages/Report';
import ScrapLog from './pages/ScrapLog';
import Company from './pages/Company';
import Account from './pages/Accounts';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <DashboardComp /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/account" element={<Account />} />
          <Route path="/competitor" element={<Competitor />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/report" element={<Report />} />
          <Route path="/scraplog" element={<ScrapLog />} />
          <Route path="/company" element={<Company />} />

        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
