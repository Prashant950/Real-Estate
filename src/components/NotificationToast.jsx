import { useProperties } from '../context/PropertyContext'

export default function NotificationToast() {
  const { notification } = useProperties()

  if (!notification) return null

  return (
    <div className="fixed bottom-6 right-6 z-[200] max-w-md animate-fade-in">
      <div className="flex items-center gap-3 rounded-lg border border-bronze/40 bg-[#161513] p-4 text-white shadow-2xl backdrop-blur-md">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
          ✓
        </span>
        <div className="flex-1 text-xs">
          <p className="font-bold text-bronze-l mb-0.5">Real Estate Square Notice</p>
          <p className="text-[#ded8cb] leading-relaxed">{notification.message}</p>
        </div>
      </div>
    </div>
  )
}
