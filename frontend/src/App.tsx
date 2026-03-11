import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { CustomersPage } from './pages/CustomersPage';
import { FoodOrderPage } from './pages/FoodOrderPage';
import { ManageMenuPage } from './pages/ManageMenuPage';
import { CustomerReviewPage } from './pages/CustomerReviewPage';
import { PaymentPage } from './pages/PaymentPage';
import { AccountsPage } from './pages/AccountsPage';
import { SettingsPage } from './pages/SettingsPage';
import { HelpPage } from './pages/HelpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout title="Dashboard"><DashboardPage /></Layout>} />
        <Route path="/customers" element={<Layout title="Customers"><CustomersPage /></Layout>} />
        <Route path="/food-order" element={<Layout title="Food Order"><FoodOrderPage /></Layout>} />
        <Route path="/manage-menu" element={<Layout title="Manage Menu"><ManageMenuPage /></Layout>} />
        <Route path="/customer-review" element={<Layout title="Customer Review"><CustomerReviewPage /></Layout>} />
        <Route path="/settings" element={<Layout title="Settings"><SettingsPage /></Layout>} />
        <Route path="/payment" element={<Layout title="Payment"><PaymentPage /></Layout>} />
        <Route path="/accounts" element={<Layout title="Accounts"><AccountsPage /></Layout>} />
        <Route path="/help" element={<Layout title="Help"><HelpPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
