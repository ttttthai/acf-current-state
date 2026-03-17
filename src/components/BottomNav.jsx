import { useLocation, useNavigate } from 'react-router-dom'
import { Home, CreditCard, Wallet, User } from 'lucide-react'

const tabs = [
  { path: '/', label: 'Trang chủ', icon: Home },
  { path: '/cash-loan', label: 'Vay', icon: CreditCard },
  { path: '/repayment', label: 'Thanh toán', icon: Wallet },
  { path: '/account', label: 'Tài khoản', icon: User },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-aeon-border z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path ||
            (tab.path === '/cash-loan' && ['/cash-loan', '/installment', '/ekyc'].includes(location.pathname))
          const Icon = tab.icon
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full border-none bg-transparent cursor-pointer transition-all duration-200 ${
                isActive ? 'text-aeon-red' : 'text-aeon-muted hover:text-aeon-text'
              }`}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className={`text-[10px] leading-tight ${isActive ? 'font-semibold' : 'font-normal'}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
      {/* Safe area padding for devices with home indicator */}
      <div className="h-[env(safe-area-inset-bottom,0px)]" />
    </nav>
  )
}
