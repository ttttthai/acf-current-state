import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, User, Phone, Mail, CreditCard, ChevronRight, LogOut, HelpCircle } from 'lucide-react'

const loanHistory = [
  {
    id: 'ACF-2025-001847',
    type: 'Vay tiền mặt',
    amount: '45.000.000 ₫',
    date: '15/12/2025',
    status: 'active',
    statusText: 'Đang hoạt động',
  },
  {
    id: 'ACF-2024-001203',
    type: 'Vay trả góp - Điện tử',
    amount: '18.500.000 ₫',
    date: '20/06/2024',
    status: 'completed',
    statusText: 'Đã tất toán',
  },
  {
    id: 'ACF-2023-000891',
    type: 'Vay tiền mặt',
    amount: '30.000.000 ₫',
    date: '10/03/2023',
    status: 'completed',
    statusText: 'Đã tất toán',
  },
]

export default function Account() {
  const navigate = useNavigate()
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  return (
    <div className="min-h-screen bg-aeon-bg">
      {/* Header */}
      <div className="bg-aeon-red px-4 pt-12 pb-6">
        <h1 className="text-white text-base font-semibold mb-4">Tài khoản</h1>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <User size={24} strokeWidth={1.5} className="text-white" />
          </div>
          <div>
            <p className="text-white text-base font-semibold">Nguyễn Văn Minh</p>
            <p className="text-white/70 text-xs">Khách hàng từ 03/2023</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Profile Info */}
        <div className="bg-white rounded-xl border border-aeon-border shadow-sm mb-4 overflow-hidden">
          <div className="p-4 border-b border-aeon-border">
            <h3 className="text-sm font-semibold text-aeon-text">Thông tin cá nhân</h3>
          </div>
          <div className="divide-y divide-aeon-border">
            <div className="flex items-center gap-3 px-4 py-3">
              <User size={16} strokeWidth={1.5} className="text-aeon-muted shrink-0" />
              <div className="flex-1">
                <p className="text-[10px] text-aeon-muted">Họ và tên</p>
                <p className="text-xs font-medium text-aeon-text">Nguyễn Văn Minh</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3">
              <Phone size={16} strokeWidth={1.5} className="text-aeon-muted shrink-0" />
              <div className="flex-1">
                <p className="text-[10px] text-aeon-muted">Số điện thoại</p>
                <p className="text-xs font-medium text-aeon-text">0912 345 678</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3">
              <Mail size={16} strokeWidth={1.5} className="text-aeon-muted shrink-0" />
              <div className="flex-1">
                <p className="text-[10px] text-aeon-muted">Email</p>
                <p className="text-xs font-medium text-aeon-text">minh.nguyen@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3">
              <CreditCard size={16} strokeWidth={1.5} className="text-aeon-muted shrink-0" />
              <div className="flex-1">
                <p className="text-[10px] text-aeon-muted">Số CCCD</p>
                <p className="text-xs font-medium text-aeon-text">079 0XX XXX XXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan History */}
        <div className="bg-white rounded-xl border border-aeon-border shadow-sm mb-4 overflow-hidden">
          <div className="p-4 border-b border-aeon-border">
            <h3 className="text-sm font-semibold text-aeon-text">Lịch sử khoản vay</h3>
          </div>
          <div className="divide-y divide-aeon-border">
            {loanHistory.map(loan => (
              <button
                key={loan.id}
                onClick={() => loan.status === 'active' && navigate('/loan-details')}
                className="w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-200 hover:bg-gray-50"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-xs font-medium text-aeon-text">{loan.type}</p>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${
                      loan.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {loan.statusText}
                    </span>
                  </div>
                  <p className="text-[10px] text-aeon-muted">{loan.id} | {loan.date}</p>
                  <p className="text-xs font-semibold text-aeon-text mt-0.5">{loan.amount}</p>
                </div>
                {loan.status === 'active' && (
                  <ChevronRight size={16} strokeWidth={1.5} className="text-aeon-muted shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-xl border border-aeon-border shadow-sm mb-4 overflow-hidden">
          <button
            onClick={() => navigate('/support')}
            className="w-full flex items-center gap-3 px-4 py-3 border-b border-aeon-border transition-all duration-200 hover:bg-gray-50"
          >
            <HelpCircle size={20} strokeWidth={1.5} className="text-aeon-muted" />
            <span className="text-sm text-aeon-text flex-1 text-left">Hỗ trợ</span>
            <ChevronRight size={16} strokeWidth={1.5} className="text-aeon-muted" />
          </button>
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-red-50"
          >
            <LogOut size={20} strokeWidth={1.5} className="text-aeon-red" />
            <span className="text-sm text-aeon-red flex-1 text-left">Đăng xuất</span>
          </button>
        </div>

        {/* App Version */}
        <p className="text-center text-[10px] text-aeon-muted mt-4 mb-4">
          ACF Mobile v1.2.0 | Build 2025.12.01
        </p>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="w-full max-w-[430px] bg-white rounded-t-2xl p-6 animate-[slideUp_0.2s_ease-out]">
            <h3 className="text-base font-semibold text-aeon-text text-center mb-2">
              Đăng xuất?
            </h3>
            <p className="text-xs text-aeon-muted text-center mb-6">
              Bạn có chắc chắn muốn đăng xuất khỏi tài khoản?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-2.5 rounded-lg border border-aeon-border text-sm font-medium text-aeon-text transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
              >
                Hủy
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-2.5 rounded-lg bg-aeon-red text-white text-sm font-medium transition-all duration-200 hover:bg-aeon-red-dark active:scale-[0.98]"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="h-20"></div>
    </div>
  )
}
