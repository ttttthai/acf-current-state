import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Monitor, Armchair, Heart, GraduationCap, Plane, ChevronRight, Loader2 } from 'lucide-react'

const categories = [
  { id: 'dien_tu', label: 'Điện tử', icon: Monitor, color: 'bg-blue-50 text-blue-500' },
  { id: 'noi_that', label: 'Nội thất', icon: Armchair, color: 'bg-orange-50 text-orange-500' },
  { id: 'y_te', label: 'Y tế', icon: Heart, color: 'bg-red-50 text-red-500' },
  { id: 'giao_duc', label: 'Giáo dục', icon: GraduationCap, color: 'bg-green-50 text-green-600' },
  { id: 'du_lich', label: 'Du lịch', icon: Plane, color: 'bg-purple-50 text-purple-500' },
]

const products = {
  dien_tu: ['iPhone 15 Pro Max', 'Samsung Galaxy S24', 'MacBook Air M3', 'iPad Pro 2024'],
  noi_that: ['Bộ sofa phòng khách', 'Tủ lạnh Panasonic', 'Máy giặt LG', 'Điều hòa Daikin'],
  y_te: ['Gói khám tổng quát', 'Dịch vụ nha khoa', 'Phẫu thuật mắt LASIK', 'Thiết bị y tế gia đình'],
  giao_duc: ['Khóa học tiếng Anh', 'Laptop cho học sinh', 'Du học ngắn hạn', 'Khóa đào tạo nghề'],
  du_lich: ['Tour Đà Nẵng 3N2Đ', 'Tour Phú Quốc 4N3Đ', 'Tour Hàn Quốc 5N4Đ', 'Tour Nhật Bản 6N5Đ'],
}

export default function Installment() {
  const navigate = useNavigate()
  const [selectedCat, setSelectedCat] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = () => {
    const errs = {}
    if (!selectedCat) errs.category = 'Vui lòng chọn danh mục'
    if (!selectedProduct) errs.product = 'Vui lòng chọn sản phẩm'
    if (!amount || parseInt(amount.replace(/\D/g, '')) < 1000000) errs.amount = 'Số tiền tối thiểu 1.000.000 ₫'
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/ekyc')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-aeon-bg">
      {/* Header */}
      <div className="bg-aeon-red px-4 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="text-white transition-all duration-200 active:scale-90">
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <h1 className="text-white text-base font-semibold">Vay trả góp</h1>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Categories */}
        <h2 className="text-sm font-semibold text-aeon-text mb-3">Chọn danh mục</h2>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {categories.map(cat => {
            const Icon = cat.icon
            const isActive = selectedCat === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCat(cat.id)
                  setSelectedProduct('')
                  setErrors(prev => ({ ...prev, category: '' }))
                }}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'border-aeon-red bg-red-50 shadow-sm'
                    : 'border-aeon-border bg-white hover:shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.color}`}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <span className={`text-[11px] font-medium ${isActive ? 'text-aeon-red' : 'text-aeon-text'}`}>
                  {cat.label}
                </span>
              </button>
            )
          })}
        </div>
        {errors.category && <p className="text-xs text-aeon-red -mt-4 mb-4">{errors.category}</p>}

        {/* Products */}
        {selectedCat && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-aeon-text mb-3">Chọn sản phẩm</h2>
            <div className="space-y-2">
              {products[selectedCat].map(product => (
                <button
                  key={product}
                  onClick={() => {
                    setSelectedProduct(product)
                    setErrors(prev => ({ ...prev, product: '' }))
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
                    selectedProduct === product
                      ? 'border-aeon-red bg-red-50 text-aeon-red font-medium'
                      : 'border-aeon-border bg-white text-aeon-text hover:shadow-sm'
                  }`}
                >
                  {product}
                </button>
              ))}
            </div>
            {errors.product && <p className="text-xs text-aeon-red mt-2">{errors.product}</p>}
          </div>
        )}

        {/* Amount */}
        {selectedProduct && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-aeon-text mb-3">Số tiền trả góp</h2>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={e => {
                  setAmount(e.target.value)
                  setErrors(prev => ({ ...prev, amount: '' }))
                }}
                placeholder="VD: 15.000.000"
                className={`w-full px-3 py-2.5 text-sm border rounded-lg bg-white outline-none pr-10 transition-all duration-200 ${
                  errors.amount ? 'border-aeon-red' : 'border-aeon-border focus:border-aeon-red focus:shadow-[0_0_0_2px_rgba(230,0,18,0.15)]'
                }`}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-aeon-muted">₫</span>
            </div>
            {errors.amount && <p className="text-xs text-aeon-red mt-1">{errors.amount}</p>}
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-3 border border-aeon-border mb-6">
          <p className="text-[10px] text-aeon-muted leading-relaxed">
            * Kỳ hạn từ 3-24 tháng. Lãi suất từ 0% tùy chương trình khuyến mãi. Bạn sẽ cần hoàn thành xác thực eKYC trước khi hồ sơ được xử lý. Thời gian duyệt: 1-3 ngày làm việc.
          </p>
        </div>
      </div>

      {/* Submit */}
      <div className="px-4 pb-24">
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
            <>Tiếp tục <ChevronRight size={16} strokeWidth={1.5} /></>
          )}
        </button>
      </div>
    </div>
  )
}
