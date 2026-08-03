import React, { useState, useEffect } from 'react'

const ToggleSwitch = ({ defaultChecked = false, checked, onChange }) => {
  const [isToggled, setIsToggled] = useState(defaultChecked)

  useEffect(() => {
    if (checked !== undefined) {
      setIsToggled(checked)
    }
  }, [checked])

  const handleToggle = () => {
    const newValue = !isToggled
    if (checked === undefined) {
      setIsToggled(newValue)
    }

    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        isToggled ? 'bg-slider-bg' : 'bg-neutral-600'
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
          isToggled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

export default ToggleSwitch
