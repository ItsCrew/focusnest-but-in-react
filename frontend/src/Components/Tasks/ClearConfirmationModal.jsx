import React, { useEffect } from 'react'

const ClearConfirmationModal = ({ onClose, onConfirm }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onClose) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose()
      }}
      className="flex items-center justify-center bg-black/60 backdrop-blur-xs fixed inset-0 z-1200 p-4">
      <div className="w-full max-w-md border border-modal-border rounded-2xl dark:bg-modal-bg bg-neutral-900 shadow-2xl p-6 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-2xl font-bold text-font-dark">Clear all tasks?</h2>
          <p className="text-neutral-300 text-sm leading-relaxed max-w-xs">
            This will permanently delete all tasks. <span className="text-white font-medium">This action cannot be undone.</span>
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="h-11 w-28 rounded-[10px] text-white font-medium text-base bg-headings-dark hover:bg-[#5e7f64] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="h-11 w-28 rounded-[10px] text-white font-medium text-base bg-red-500 hover:bg-red-600 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            Clear all
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClearConfirmationModal
