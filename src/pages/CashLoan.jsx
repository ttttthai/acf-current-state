import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Loader2 } from 'lucide-react'

const steps = [
  { id: 1, title: 'Thông tin cá nhân' },
  { id: 2, title: 'Thu nhập' },
  { id: 3, title: 'Khoản vay' },
]

export default function CashLoan() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    hoTen: '',
    cccd: '',
    ngaySinh: '',
    diaChi: '',
    noiLamViec: '',
    thuNhap: '',
    loaiHopDong: '',
    soTien: 20000000,
    kyHan: 12,
  })

  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateStep1 = () => {
    const errs = {}
    if (!form.hoTen.trim()) errs.hoTen = 'Vui lòng nhập họ tên'
    if (!form.cccd.trim()) errs.cccd = 'Vui lòng nhập số CCCD'
    else if (form.cccd.length !== 12) errs.cccd = 'CCCD phải có 12 số'
    if (!form.ngaySinh) errs.ngaySinh = 'Vui lòng chọn ngày sinh'
    if (!form.diaChi.trim()) errs.diaChi = 'Vui lòng nhập địa chỉ'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const validateStep2 = () => {
    const errs = {}
    if (!form.noiLamViec.trim()) errs.noiLamViec = 'Vui lòng nhập nơi làm việc'
    if (!form.thuNhap.trim()) errs.thuNhap = 'Vui lòng nhập thu nhập'
    if (!form.loaiHopDong) errs.loaiHopDong = 'Vui lòng chọn loại hợp đồng'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return
    if (currentStep === 2 && !validateStep2()) return
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1)
      setErrors({})
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/ekyc')
    }, 2000)
  }

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('vi-VN').format(num) + ' ₫'
  }

  const InputField = ({ label, field, type = 'text', placeholder, maxLength }) => (
    <div className="mb-4">
      <label className="block text-xs font-medium text-aeon-text mb-1.5">
        {label} <span className="text-aeon-red">*</span>
      </label>
      <input
        type={type}
        value={form[field]}
        onChange={e => updateForm(field, e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full px-3 py-2.5 text-sm border rounded-lg bg-white outline-none transition-all duration-200 ${
          errors[field] ? 'border-aeon-red bg-red-50' : 'border-aeon-border focus:border-aeon-red focus:shadow-[0_0_0_2px_rgba(230,0,18,0.15)]'
        }`}
      />
      {errors[field] && (
        <p className="text-xs text-aeon-red mt-1">{errors[field]}</p>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-aeon-bg">
      {/* Header */}
      <div className="bg-aeon-red px-4 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => currentStep > 1 ? setCurrentStep(prev => prev - 1) : navigate('/')}
            className="text-white transition-all duration-200 active:scale-90"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <h1 className="text-white text-base font-semibold">Vay tiền mặt</h1>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="bg-white px-4 py-3 border-b border-aeon-border">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                currentStep >= step.id ? 'bg-aeon-red text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step.id}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-1 transition-all duration-200 ${
                  currentStep > step.id ? 'bg-aeon-red' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-aeon-muted text-center">
          Bước {currentStep}/3: {steps[currentStep - 1].title}
        </p>
      </div>

      {/* Form Content */}
      <div className="px-4 py-4">
        {currentStep === 1 && (
          <div>
            <h2 className="text-sm font-semibold text-aeon-text mb-4">Thông tin cá nhân</h2>
            <InputField label="Họ và tên" field="hoTen" placeholder="Nguyễn Văn A" />
            <InputField label="Số CCCD" field="cccd" placeholder="0123456789XX" maxLength={12} />
            <InputField label="Ngày sinh" field="ngaySinh" type="date" />
            <InputField label="Địa chỉ thường trú" field="diaChi" placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/TP" />
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-sm font-semibold text-aeon-text mb-4">Thông tin thu nhập</h2>
            <InputField label="Nơi làm việc" field="noiLamViec" placeholder="Tên công ty / tổ chức" />
            <InputField label="Thu nhập hàng tháng" field="thuNhap" placeholder="VD: 15.000.000" />
            <div className="mb-4">
              <label className="block text-xs font-medium text-aeon-text mb-1.5">
                Loại hợp đồng lao động <span className="text-aeon-red">*</span>
              </label>
              <select
                value={form.loaiHopDong}
                onChange={e => updateForm('loaiHopDong', e.target.value)}
                className={`w-full px-3 py-2.5 text-sm border rounded-lg bg-white outline-none transition-all duration-200 ${
                  errors.loaiHopDong ? 'border-aeon-red' : 'border-aeon-border focus:border-aeon-red focus:shadow-[0_0_0_2px_rgba(230,0,18,0.15)]'
                }`}
              >
                <option value="">-- Chọn loại hợp đồng --</option>
                <option value="chinh_thuc">Chính thức (không thời hạn)</option>
                <option value="co_thoi_han">Có thời hạn</option>
                <option value="thu_viec">Thử việc</option>
                <option value="tu_do">Tự do / Freelance</option>
              </select>
              {errors.loaiHopDong && (
                <p className="text-xs text-aeon-red mt-1">{errors.loaiHopDong}</p>
              )}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
              <p className="text-xs text-amber-700">
                ⚠ Bạn cần chuẩn bị bản sao hợp đồng lao động và sao kê lương 3 tháng gần nhất để nộp tại bước xác thực.
              </p>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-sm font-semibold text-aeon-text mb-4">Thông tin khoản vay</h2>

            <div className="mb-6">
              <label className="block text-xs font-medium text-aeon-text mb-1.5">
                Số tiền vay
              </label>
              <p className="text-xl font-bold text-aeon-red mb-2">{formatCurrency(form.soTien)}</p>
              <input
                type="range"
                min={5000000}
                max={100000000}
                step={1000000}
                value={form.soTien}
                onChange={e => updateForm('soTien', parseInt(e.target.value))}
                className="w-full accent-aeon-red"
              />
              <div className="flex justify-between text-[10px] text-aeon-muted mt-1">
                <span>5 triệu</span>
                <span>100 triệu</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-medium text-aeon-text mb-1.5">
                Kỳ hạn vay
              </label>
              <p className="text-xl font-bold text-aeon-text mb-2">{form.kyHan} tháng</p>
              <input
                type="range"
                min={6}
                max={36}
                step={6}
                value={form.kyHan}
                onChange={e => updateForm('kyHan', parseInt(e.target.value))}
                className="w-full accent-aeon-red"
              />
              <div className="flex justify-between text-[10px] text-aeon-muted mt-1">
                <span>6 tháng</span>
                <span>36 tháng</span>
              </div>
            </div>

            {/* Estimate */}
            <div className="bg-white rounded-xl p-4 border border-aeon-border">
              <h3 className="text-xs font-semibold text-aeon-text mb-3">Ước tính khoản vay</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-aeon-muted">Số tiền vay</span>
                  <span className="text-xs font-medium">{formatCurrency(form.soTien)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-aeon-muted">Lãi suất</span>
                  <span className="text-xs font-medium">2.5% / tháng</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-aeon-muted">Kỳ hạn</span>
                  <span className="text-xs font-medium">{form.kyHan} tháng</span>
                </div>
                <div className="h-px bg-aeon-border my-1"></div>
                <div className="flex justify-between">
                  <span className="text-xs text-aeon-muted">Trả hàng tháng (ước tính)</span>
                  <span className="text-sm font-bold text-aeon-red">
                    {formatCurrency(Math.round((form.soTien / form.kyHan) + (form.soTien * 0.025)))}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 mt-4 border border-aeon-border">
              <p className="text-[10px] text-aeon-muted leading-relaxed">
                * Số tiền trả hàng tháng chỉ mang tính chất tham khảo. Lãi suất và phí thực tế sẽ được xác nhận sau khi hồ sơ được duyệt. Thời gian xử lý hồ sơ: 3-5 ngày làm việc.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action */}
      <div className="px-4 pb-24">
        {currentStep < 3 ? (
          <button
            onClick={handleNext}
            className="w-full bg-aeon-red text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:bg-aeon-red-dark active:scale-[0.98]"
          >
            Tiếp tục <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-aeon-red text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 transition-all duration-200 hover:bg-aeon-red-dark active:scale-[0.98]"
          >
            {loading ? (
              <>
                <Loader2 size={16} strokeWidth={1.5} className="animate-spin" /> Đang xử lý...
              </>
            ) : (
              'Gửi hồ sơ & Xác thực eKYC'
            )}
          </button>
        )}
      </div>
    </div>
  )
}
