import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Building2, MapPin, Copy, CheckCircle2, Loader2 } from 'lucide-react'

export default function Repayment() {
  const navigate = useNavigate()
  const [method, setMethod] = useState(null)
  const [copied, setCopied] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard?.writeText?.(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleConfirm = () => {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setConfirmed(true)
    }, 2000)
  }

  if (confirmed) {
    return (
      <div className="min-h-screen bg-aeon-bg">
        <div className="bg-aeon-red px-4 pt-12 pb-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="text-white transition-all duration-200 active:scale-90">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <h1 className="text-white text-base font-semibold">Thanh toán</h1>
          </div>
        </div>
        <div className="px-4 pt-16 text-center">
          <CheckCircle2 size={56} strokeWidth={1.5} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-aeon-text mb-2">Đã ghi nhận!</h2>
          <p className="text-sm text-aeon-muted mb-1">
            {method === 'bank'
              ? 'Vui lòng hoàn tất chuyển khoản trong vòng 24 giờ.'
              : 'Vui lòng đến quầy giao dịch ACF gần nhất trong giờ làm việc.'}
          </p>
          <p className="text-xs text-aeon-muted mt-4">
            Khoản thanh toán sẽ được cập nhật trong 1-3 ngày làm việc sau khi nhận được tiền.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-8 bg-aeon-red text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-aeon-red-dark active:scale-[0.98]"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-aeon-bg">
      {/* Header */}
      <div className="bg-aeon-red px-4 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="text-white transition-all duration-200 active:scale-90">
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <h1 className="text-white text-base font-semibold">Thanh toán</h1>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Payment Info */}
        <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm mb-4">
          <p className="text-xs text-aeon-muted mb-1">Số tiền thanh toán kỳ này</p>
          <p className="text-2xl font-bold text-aeon-red">3.750.000 ₫</p>
          <p className="text-xs text-aeon-muted mt-1">Hạn thanh toán: <span className="font-medium text-aeon-text">15/04/2026</span></p>
        </div>

        {/* Payment Methods */}
        <h2 className="text-sm font-semibold text-aeon-text mb-3">Phương thức thanh toán</h2>
        <p className="text-xs text-aeon-muted mb-3">Chỉ hỗ trợ 2 phương thức:</p>

        <div className="space-y-3 mb-6">
          {/* Bank Transfer */}
          <button
            onClick={() => setMethod('bank')}
            className={`w-full text-left rounded-xl p-4 border transition-all duration-200 ${
              method === 'bank' ? 'border-aeon-red bg-red-50 shadow-sm' : 'border-aeon-border bg-white hover:shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Building2 size={20} strokeWidth={1.5} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-aeon-text">Chuyển khoản ngân hàng</p>
                <p className="text-xs text-aeon-muted mt-0.5">Thủ công qua Internet Banking / ATM</p>
              </div>
            </div>
          </button>

          {/* At Counter */}
          <button
            onClick={() => setMethod('counter')}
            className={`w-full text-left rounded-xl p-4 border transition-all duration-200 ${
              method === 'counter' ? 'border-aeon-red bg-red-50 shadow-sm' : 'border-aeon-border bg-white hover:shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                <MapPin size={20} strokeWidth={1.5} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-aeon-text">Thanh toán tại quầy</p>
                <p className="text-xs text-aeon-muted mt-0.5">Đến văn phòng ACF hoặc điểm thu hộ</p>
              </div>
            </div>
          </button>
        </div>

        {/* Not Available Methods */}
        <div className="bg-gray-100 rounded-xl p-4 border border-aeon-border mb-6">
          <p className="text-xs font-medium text-gray-400 mb-2">Chưa hỗ trợ:</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] bg-gray-200 text-gray-400 px-2 py-1 rounded-full line-through">QR Code</span>
            <span className="text-[10px] bg-gray-200 text-gray-400 px-2 py-1 rounded-full line-through">Ví MoMo</span>
            <span className="text-[10px] bg-gray-200 text-gray-400 px-2 py-1 rounded-full line-through">Ví ZaloPay</span>
            <span className="text-[10px] bg-gray-200 text-gray-400 px-2 py-1 rounded-full line-through">VNPay</span>
            <span className="text-[10px] bg-gray-200 text-gray-400 px-2 py-1 rounded-full line-through">Tự động trích nợ</span>
          </div>
        </div>

        {/* Bank Transfer Details */}
        {method === 'bank' && (
          <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm mb-6">
            <h3 className="text-sm font-semibold text-aeon-text mb-3">Thông tin chuyển khoản</h3>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-aeon-muted">Ngân hàng</p>
                <p className="text-xs font-medium text-aeon-text">Vietcombank - CN Hồ Chí Minh</p>
              </div>
              <div>
                <p className="text-[10px] text-aeon-muted">Số tài khoản</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-mono font-medium text-aeon-text">0071 0012 3456 789</p>
                  <button onClick={() => handleCopy('007100123456789')} className="text-aeon-red transition-all duration-200 active:scale-90">
                    {copied ? <CheckCircle2 size={14} strokeWidth={1.5} /> : <Copy size={14} strokeWidth={1.5} />}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-aeon-muted">Tên tài khoản</p>
                <p className="text-xs font-medium text-aeon-text">CONG TY TNHH ACF VIET NAM</p>
              </div>
              <div>
                <p className="text-[10px] text-aeon-muted">Nội dung chuyển khoản</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-mono font-medium text-aeon-red">ACF001847 NGUYEN VAN MINH</p>
                  <button onClick={() => handleCopy('ACF001847 NGUYEN VAN MINH')} className="text-aeon-red transition-all duration-200 active:scale-90">
                    <Copy size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-2">
              <p className="text-[10px] text-amber-700">
                ⚠ Vui lòng nhập chính xác nội dung chuyển khoản. Sai nội dung có thể khiến khoản thanh toán không được ghi nhận.
              </p>
            </div>
          </div>
        )}

        {/* Counter Details */}
        {method === 'counter' && (
          <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm mb-6">
            <h3 className="text-sm font-semibold text-aeon-text mb-3">Địa điểm thanh toán</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-aeon-text">VP ACF - Quận 1</p>
                <p className="text-[10px] text-aeon-muted mt-0.5">123 Nguyễn Huệ, P. Bến Nghé, Q.1, TP.HCM</p>
                <p className="text-[10px] text-aeon-muted">T2-T6: 8:00 - 17:00</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-aeon-text">VP ACF - Quận 7</p>
                <p className="text-[10px] text-aeon-muted mt-0.5">456 Nguyễn Thị Thập, P. Tân Quy, Q.7, TP.HCM</p>
                <p className="text-[10px] text-aeon-muted">T2-T6: 8:00 - 17:00</p>
              </div>
            </div>
            <p className="text-[10px] text-aeon-muted mt-3">
              Mang theo CCCD gốc và mã hợp đồng khi đến giao dịch.
            </p>
          </div>
        )}
      </div>

      {/* Confirm Button */}
      {method && (
        <div className="px-4 pb-24">
          <button
            onClick={handleConfirm}
            disabled={submitting}
            className="w-full bg-aeon-red text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 transition-all duration-200 hover:bg-aeon-red-dark active:scale-[0.98]"
          >
            {submitting ? (
              <>
                <Loader2 size={16} strokeWidth={1.5} className="animate-spin" /> Đang xử lý...
              </>
            ) : (
              'Xác nhận thanh toán'
            )}
          </button>
        </div>
      )}
    </div>
  )
}
