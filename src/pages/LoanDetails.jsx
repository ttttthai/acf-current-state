import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Percent, Clock, CreditCard } from 'lucide-react'

const paymentSchedule = [
  { ky: 1, ngay: '15/01/2026', gocTra: '1.875.000', laiTra: '1.125.000', tongTra: '3.000.000', trangThai: 'paid' },
  { ky: 2, ngay: '15/02/2026', gocTra: '1.875.000', laiTra: '1.078.125', tongTra: '2.953.125', trangThai: 'paid' },
  { ky: 3, ngay: '15/03/2026', gocTra: '1.875.000', laiTra: '1.031.250', tongTra: '2.906.250', trangThai: 'paid' },
  { ky: 4, ngay: '15/04/2026', gocTra: '1.875.000', laiTra: '984.375', tongTra: '2.859.375', trangThai: 'upcoming' },
  { ky: 5, ngay: '15/05/2026', gocTra: '1.875.000', laiTra: '937.500', tongTra: '2.812.500', trangThai: 'future' },
  { ky: 6, ngay: '15/06/2026', gocTra: '1.875.000', laiTra: '890.625', tongTra: '2.765.625', trangThai: 'future' },
  { ky: 7, ngay: '15/07/2026', gocTra: '1.875.000', laiTra: '843.750', tongTra: '2.718.750', trangThai: 'future' },
  { ky: 8, ngay: '15/08/2026', gocTra: '1.875.000', laiTra: '796.875', tongTra: '2.671.875', trangThai: 'future' },
]

export default function LoanDetails() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-aeon-bg">
      {/* Header */}
      <div className="bg-aeon-red px-4 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="text-white transition-all duration-200 active:scale-90">
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <h1 className="text-white text-base font-semibold">Chi tiết khoản vay</h1>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Loan Info Card */}
        <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-aeon-muted">ACF-2025-001847</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
              Đang hoạt động
            </span>
          </div>

          <p className="text-2xl font-bold text-aeon-text mb-4">45.000.000 ₫</p>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <Percent size={16} strokeWidth={1.5} className="text-aeon-red" />
              </div>
              <div>
                <p className="text-[10px] text-aeon-muted">Lãi suất</p>
                <p className="text-xs font-semibold text-aeon-text">2.5% / tháng</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Clock size={16} strokeWidth={1.5} className="text-blue-500" />
              </div>
              <div>
                <p className="text-[10px] text-aeon-muted">Kỳ hạn</p>
                <p className="text-xs font-semibold text-aeon-text">24 tháng</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                <Calendar size={16} strokeWidth={1.5} className="text-green-600" />
              </div>
              <div>
                <p className="text-[10px] text-aeon-muted">Ngày thanh toán</p>
                <p className="text-xs font-semibold text-aeon-text">15 hàng tháng</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                <CreditCard size={16} strokeWidth={1.5} className="text-purple-500" />
              </div>
              <div>
                <p className="text-[10px] text-aeon-muted">Loại vay</p>
                <p className="text-xs font-semibold text-aeon-text">Tiền mặt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm mb-4">
          <h3 className="text-sm font-semibold text-aeon-text mb-3">Tổng quan</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-aeon-muted">Số tiền giải ngân</span>
              <span className="text-xs font-medium">45.000.000 ₫</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-aeon-muted">Đã trả gốc</span>
              <span className="text-xs font-medium text-green-600">5.625.000 ₫</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-aeon-muted">Đã trả lãi</span>
              <span className="text-xs font-medium">3.234.375 ₫</span>
            </div>
            <div className="h-px bg-aeon-border"></div>
            <div className="flex justify-between">
              <span className="text-xs text-aeon-muted">Dư nợ gốc còn lại</span>
              <span className="text-sm font-bold text-aeon-red">39.375.000 ₫</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-aeon-muted">Số kỳ đã thanh toán</span>
              <span className="text-xs font-medium">3/24 kỳ</span>
            </div>
          </div>
        </div>

        {/* Payment Schedule */}
        <div className="bg-white rounded-xl border border-aeon-border shadow-sm mb-4 overflow-hidden">
          <div className="p-4 border-b border-aeon-border">
            <h3 className="text-sm font-semibold text-aeon-text">Lịch thanh toán</h3>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-5 gap-1 px-3 py-2 bg-gray-50 text-[9px] font-semibold text-aeon-muted">
            <span>Kỳ</span>
            <span>Ngày</span>
            <span className="text-right">Gốc</span>
            <span className="text-right">Lãi</span>
            <span className="text-right">Trạng thái</span>
          </div>

          {/* Table Body */}
          {paymentSchedule.map(row => (
            <div key={row.ky} className={`grid grid-cols-5 gap-1 px-3 py-2.5 border-b border-aeon-border last:border-b-0 transition-all duration-200 ${
              row.trangThai === 'upcoming' ? 'bg-amber-50' : ''
            }`}>
              <span className="text-[10px] text-aeon-text">{row.ky}</span>
              <span className="text-[10px] text-aeon-text">{row.ngay}</span>
              <span className="text-[10px] text-right text-aeon-text">{row.gocTra}</span>
              <span className="text-[10px] text-right text-aeon-text">{row.laiTra}</span>
              <span className="text-right">
                {row.trangThai === 'paid' && (
                  <span className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Đã trả</span>
                )}
                {row.trangThai === 'upcoming' && (
                  <span className="text-[8px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">Sắp tới</span>
                )}
                {row.trangThai === 'future' && (
                  <span className="text-[8px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">Chờ</span>
                )}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-aeon-muted text-center mb-4">
          Hiển thị 8/24 kỳ thanh toán. Liên hệ hotline 1900-xxxx để xem đầy đủ.
        </p>
      </div>

      {/* Action */}
      <div className="px-4 pb-24">
        <button
          onClick={() => navigate('/repayment')}
          className="w-full bg-aeon-red text-white py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-aeon-red-dark active:scale-[0.98]"
        >
          Thanh toán ngay
        </button>
      </div>
    </div>
  )
}
