import { useNavigate } from 'react-router-dom'
import { CreditCard, ShoppingCart, ChevronRight, Bell, AlertCircle } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-aeon-bg">
      {/* Header */}
      <div className="bg-aeon-red px-4 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/70 text-xs">Xin chào,</p>
            <h1 className="text-white text-lg font-semibold">Nguyễn Văn Minh</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all duration-200 hover:bg-white/30 active:scale-95">
            <Bell size={20} strokeWidth={1.5} className="text-white" />
          </button>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-aeon-muted text-xs mb-1">Dư nợ hiện tại</p>
          <p className="text-2xl font-bold text-aeon-text">45.000.000 ₫</p>
          <div className="h-px bg-aeon-border my-3"></div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-aeon-muted text-xs">Kỳ thanh toán tiếp theo</p>
              <p className="text-sm font-semibold text-aeon-text">3.750.000 ₫</p>
            </div>
            <div className="text-right">
              <p className="text-aeon-muted text-xs">Ngày đến hạn</p>
              <p className="text-sm font-semibold text-aeon-red">15/04/2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="mx-4 mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
        <AlertCircle size={16} strokeWidth={1.5} className="text-amber-500 mt-0.5 shrink-0" />
        <p className="text-xs text-amber-700">
          Vui lòng thanh toán trước ngày 15/04/2026 để tránh phí trễ hạn.
        </p>
      </div>

      {/* Products */}
      <div className="px-4 mt-6">
        <h2 className="text-sm font-semibold text-aeon-text mb-3">Sản phẩm</h2>
        <div className="space-y-3">
          <button
            onClick={() => navigate('/cash-loan')}
            className="w-full bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-aeon-border text-left transition-all duration-200 hover:shadow-md active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
              <CreditCard size={24} strokeWidth={1.5} className="text-aeon-red" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-aeon-text">Vay tiền mặt</p>
              <p className="text-xs text-aeon-muted mt-0.5">Từ 5 - 100 triệu đồng</p>
            </div>
            <ChevronRight size={16} strokeWidth={1.5} className="text-aeon-muted shrink-0" />
          </button>

          <button
            onClick={() => navigate('/installment')}
            className="w-full bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-aeon-border text-left transition-all duration-200 hover:shadow-md active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <ShoppingCart size={24} strokeWidth={1.5} className="text-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-aeon-text">Vay trả góp</p>
              <p className="text-xs text-aeon-muted mt-0.5">Mua sắm trả góp 0% lãi suất</p>
            </div>
            <ChevronRight size={16} strokeWidth={1.5} className="text-aeon-muted shrink-0" />
          </button>
        </div>
      </div>

      {/* Loan Summary */}
      <div className="px-4 mt-6">
        <h2 className="text-sm font-semibold text-aeon-text mb-3">Khoản vay của bạn</h2>
        <button
          onClick={() => navigate('/loan-details')}
          className="w-full bg-white rounded-xl p-4 shadow-sm border border-aeon-border text-left transition-all duration-200 hover:shadow-md active:scale-[0.98]"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-aeon-muted">Mã hợp đồng</p>
            <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded">ACF-2025-001847</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-aeon-muted">Loại vay</p>
            <p className="text-xs font-medium text-aeon-text">Vay tiền mặt</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-aeon-muted">Số dư còn lại</p>
            <p className="text-sm font-semibold text-aeon-red">45.000.000 ₫</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-aeon-muted">Trạng thái</p>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
              Đang hoạt động
            </span>
          </div>
        </button>
      </div>

      {/* Quick actions */}
      <div className="px-4 mt-6 mb-8">
        <h2 className="text-sm font-semibold text-aeon-text mb-3">Thao tác nhanh</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/repayment')}
            className="bg-white rounded-xl p-3 text-center shadow-sm border border-aeon-border transition-all duration-200 hover:shadow-md active:scale-[0.97]"
          >
            <p className="text-xs font-medium text-aeon-text">Thanh toán</p>
          </button>
          <button
            onClick={() => navigate('/support')}
            className="bg-white rounded-xl p-3 text-center shadow-sm border border-aeon-border transition-all duration-200 hover:shadow-md active:scale-[0.97]"
          >
            <p className="text-xs font-medium text-aeon-text">Hỗ trợ</p>
          </button>
        </div>
      </div>
    </div>
  )
}
