import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TotalSales from './components/TotalSales';
import SalesGrowth from './components/SalesGrowth';
import NewCustomers from './components/NewCustomers';
import RepeatCustomers from './components/RepeatCustomers';
import GeographicalDistribution from './components/GeographicalDistribution';
import CustomerLifetimeValue from './components/CustomerLifetimeValue';
import LineGraph from './components/LineGraph';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Total Sales</Link></li>
            <li><Link to="/sales-growth">Sales Growth</Link></li>
            <li><Link to="/new-customers">New Customers</Link></li>
            <li><Link to="/repeat-customers">Repeat Customers</Link></li>
            <li><Link to="/geographical-distribution">Geographical Distribution</Link></li>
            <li><Link to="/customer-lifetime-value">Customer Lifetime Value</Link></li>
            <li><Link to="/line-graph">Line Graph</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TotalSales />} />
          <Route path="/sales-growth" element={<SalesGrowth />} />
          <Route path="/new-customers" element={<NewCustomers />} />
          <Route path="/repeat-customers" element={<RepeatCustomers />} />
          <Route path="/geographical-distribution" element={<GeographicalDistribution />} />
          <Route path="/customer-lifetime-value" element={<CustomerLifetimeValue />} />
          <Route path="/line-graph" element={<LineGraph />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

