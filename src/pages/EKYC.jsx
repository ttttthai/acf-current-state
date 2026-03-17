import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Camera, ScanFace, Upload, CheckCircle2, Clock, AlertTriangle, Loader2 } from 'lucide-react'

const ekycSteps = [
  { id: 1, title: 'Chụp CCCD mặt trước', desc: 'Đặt CCCD trên nền phẳng, đủ ánh sáng', icon: Camera },
  { id: 2, title: 'Chụp CCCD mặt sau', desc: 'Đảm bảo thông tin rõ ràng, không bị mờ', icon: Camera },
  { id: 3, title: 'Chụp ảnh khuôn mặt', desc: 'Nhìn thẳng vào camera, không đeo kính', icon: ScanFace },
  { id: 4, title: 'Xác thực khuôn mặt', desc: 'Thực hiện các hành động theo hướng dẫn', icon: ScanFace },
  { id: 5, title: 'Tải tài liệu bổ sung', desc: 'Hợp đồng lao động, sao kê lương, ...', icon: Upload },
]

export default function EKYC() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [processing, setProcessing] = useState(false)
  const [completed, setCompleted] = useState([])

  const handleStep = () => {
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setCompleted(prev => [...prev, currentStep])
      if (currentStep < 5) {
        setCurrentStep(prev => prev + 1)
      }
    }, 2000)
  }

  const allDone = completed.length === 5
  const progress = (completed.length / 5) * 100

  return (
    <div className="min-h-screen bg-aeon-bg">
      {/* Header */}
      <div className="bg-aeon-red px-4 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-white transition-all duration-200 active:scale-90">
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <h1 className="text-white text-base font-semibold">Xác thực eKYC</h1>
        </div>
      </div>

      {/* Time estimate warning */}
      <div className="mx-4 mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
        <Clock size={16} strokeWidth={1.5} className="text-amber-500 mt-0.5 shrink-0" />
        <div>
          <p className="text-xs font-medium text-amber-800">Thời gian ước tính: 20-30 phút</p>
          <p className="text-[10px] text-amber-600 mt-0.5">
            Vui lòng chuẩn bị CCCD gốc và các tài liệu cần thiết trước khi bắt đầu.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-medium text-aeon-text">Tiến độ xác thực</p>
          <p className="text-xs text-aeon-muted">{completed.length}/5 bước</p>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-aeon-red rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Steps List */}
      <div className="px-4 mt-6 space-y-3">
        {ekycSteps.map(step => {
          const Icon = step.icon
          const isDone = completed.includes(step.id)
          const isCurrent = currentStep === step.id && !isDone
          const isLocked = step.id > currentStep && !isDone

          return (
            <div
              key={step.id}
              className={`rounded-xl p-4 border transition-all duration-200 ${
                isDone
                  ? 'bg-green-50 border-green-200'
                  : isCurrent
                  ? 'bg-white border-aeon-red shadow-sm'
                  : 'bg-gray-50 border-aeon-border opacity-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                  isDone ? 'bg-green-100' : isCurrent ? 'bg-red-50' : 'bg-gray-200'
                }`}>
                  {isDone ? (
                    <CheckCircle2 size={20} strokeWidth={1.5} className="text-green-600" />
                  ) : (
                    <Icon size={20} strokeWidth={1.5} className={isCurrent ? 'text-aeon-red' : 'text-gray-400'} />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${isDone ? 'text-green-700' : isCurrent ? 'text-aeon-text' : 'text-gray-400'}`}>
                    Bước {step.id}: {step.title}
                  </p>
                  <p className={`text-xs mt-0.5 ${isDone ? 'text-green-600' : 'text-aeon-muted'}`}>
                    {isDone ? 'Hoàn thành' : step.desc}
                  </p>

                  {isCurrent && !processing && (
                    <button
                      onClick={handleStep}
                      className="mt-3 bg-aeon-red text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-aeon-red-dark active:scale-[0.97]"
                    >
                      {step.id <= 2 ? 'Chụp ảnh' : step.id <= 4 ? 'Bắt đầu' : 'Tải lên'}
                    </button>
                  )}

                  {isCurrent && processing && (
                    <div className="mt-3 flex items-center gap-2 text-aeon-muted">
                      <Loader2 size={14} strokeWidth={1.5} className="animate-spin" />
                      <span className="text-xs">Đang xử lý...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Friction notices */}
      <div className="px-4 mt-6 space-y-3">
        <div className="bg-gray-50 border border-aeon-border rounded-lg p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle size={14} strokeWidth={1.5} className="text-aeon-muted mt-0.5 shrink-0" />
            <p className="text-[10px] text-aeon-muted leading-relaxed">
              Nếu xác thực khuôn mặt không thành công sau 3 lần thử, bạn cần đến văn phòng ACF gần nhất để xác thực trực tiếp.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-aeon-border rounded-lg p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle size={14} strokeWidth={1.5} className="text-aeon-muted mt-0.5 shrink-0" />
            <p className="text-[10px] text-aeon-muted leading-relaxed">
              Tài liệu bổ sung chấp nhận: Hợp đồng lao động, sao kê lương 3 tháng, hóa đơn điện/nước. Chỉ hỗ trợ định dạng JPG, PNG, PDF (tối đa 5MB mỗi file).
            </p>
          </div>
        </div>
      </div>

      {/* Done */}
      {allDone && (
        <div className="px-4 mt-6 pb-24">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mb-4">
            <CheckCircle2 size={40} strokeWidth={1.5} className="text-green-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-green-800">Xác thực hoàn tất!</p>
            <p className="text-xs text-green-600 mt-1">
              Hồ sơ của bạn đang được xử lý. Kết quả sẽ được thông báo trong 3-5 ngày làm việc qua SMS.
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-aeon-red text-white py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-aeon-red-dark active:scale-[0.98]"
          >
            Về trang chủ
          </button>
        </div>
      )}

      {!allDone && <div className="h-24" />}
    </div>
  )
}
