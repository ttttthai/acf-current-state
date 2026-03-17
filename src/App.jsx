import { Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import CashLoan from './pages/CashLoan'
import Installment from './pages/Installment'
import EKYC from './pages/EKYC'
import LoanDetails from './pages/LoanDetails'
import Repayment from './pages/Repayment'
import Support from './pages/Support'
import Account from './pages/Account'

function App() {
  return (
    <div className="pb-20 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cash-loan" element={<CashLoan />} />
        <Route path="/installment" element={<Installment />} />
        <Route path="/ekyc" element={<EKYC />} />
        <Route path="/loan-details" element={<LoanDetails />} />
        <Route path="/repayment" element={<Repayment />} />
        <Route path="/support" element={<Support />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

export default App
