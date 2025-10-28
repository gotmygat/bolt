import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Integrations from './pages/Integrations';
import Docs from './pages/Docs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Gateway from './pages/Gateway';
import Merchants from './pages/Merchants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/api" element={<Docs />} />
        <Route path="/app/signin" element={<SignIn />} />
        <Route path="/app/signup" element={<SignUp />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/wallet" element={<Wallet />} />
        <Route path="/app/gateway" element={<Gateway />} />
        <Route path="/app/merchants" element={<Merchants />} />
      </Routes>
    </Router>
  );
}

export default App;
