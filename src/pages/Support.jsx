import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Phone, Mail, Clock, MapPin, AlertCircle } from 'lucide-react'

export default function Support() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-aeon-bg">
      {/* Header */}
      <div className="bg-aeon-red px-4 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="text-white transition-all duration-200 active:scale-90">
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <h1 className="text-white text-base font-semibold">Hỗ trợ khách hàng</h1>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Contact Methods */}
        <h2 className="text-sm font-semibold text-aeon-text mb-3">Liên hệ</h2>

        <div className="space-y-3 mb-6">
          <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <Phone size={24} strokeWidth={1.5} className="text-aeon-red" />
              </div>
              <div>
                <p className="text-sm font-semibold text-aeon-text">Hotline</p>
                <p className="text-lg font-bold text-aeon-red mt-0.5">1900-xxxx</p>
                <p className="text-[10px] text-aeon-muted mt-0.5">Phí cuộc gọi: 1.000₫/phút</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Mail size={24} strokeWidth={1.5} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-aeon-text">Email</p>
                <p className="text-sm text-blue-500 mt-0.5">support@acf.vn</p>
                <p className="text-[10px] text-aeon-muted mt-0.5">Phản hồi trong 2-3 ngày làm việc</p>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} strokeWidth={1.5} className="text-aeon-muted" />
            <h3 className="text-sm font-semibold text-aeon-text">Thời gian làm việc</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-aeon-muted">Thứ 2 - Thứ 6</span>
              <span className="text-xs font-medium text-aeon-text">8:00 - 17:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-aeon-muted">Thứ 7</span>
              <span className="text-xs font-medium text-gray-400">Nghỉ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-aeon-muted">Chủ nhật</span>
              <span className="text-xs font-medium text-gray-400">Nghỉ</span>
            </div>
          </div>
        </div>

        {/* Missing Features Banner */}
        <div className="bg-gray-100 rounded-xl p-4 border border-aeon-border mb-6">
          <p className="text-xs font-medium text-gray-400 mb-2">Chưa có trên ứng dụng:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
              <span className="text-[11px] text-gray-400 line-through">Chat trực tuyến / Chatbot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
              <span className="text-[11px] text-gray-400 line-through">Câu hỏi thường gặp (FAQ)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
              <span className="text-[11px] text-gray-400 line-through">Tự tra cứu trạng thái hồ sơ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
              <span className="text-[11px] text-gray-400 line-through">Gửi yêu cầu trực tuyến</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
              <span className="text-[11px] text-gray-400 line-through">Video call hỗ trợ</span>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <h2 className="text-sm font-semibold text-aeon-text mb-3">Văn phòng giao dịch</h2>
        <div className="space-y-3 mb-6">
          <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm">
            <div className="flex items-start gap-2">
              <MapPin size={16} strokeWidth={1.5} className="text-aeon-red mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-aeon-text">VP Hồ Chí Minh</p>
                <p className="text-[10px] text-aeon-muted mt-0.5">123 Nguyễn Huệ, P. Bến Nghé, Q.1, TP.HCM</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-aeon-border shadow-sm">
            <div className="flex items-start gap-2">
              <MapPin size={16} strokeWidth={1.5} className="text-aeon-red mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-aeon-text">VP Hà Nội</p>
                <p className="text-[10px] text-aeon-muted mt-0.5">456 Lý Thường Kiệt, P. Trần Hưng Đạo, Q. Hoàn Kiếm, HN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 flex items-start gap-2">
          <AlertCircle size={14} strokeWidth={1.5} className="text-amber-500 mt-0.5 shrink-0" />
          <p className="text-[10px] text-amber-700 leading-relaxed">
            Ngoài giờ làm việc, vui lòng gửi email hoặc gọi lại vào ngày làm việc tiếp theo. Không có dịch vụ hỗ trợ ngoài giờ.
          </p>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  )
}
