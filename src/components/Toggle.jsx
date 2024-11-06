/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react';

const Toggle = ({ label, onChange, disabled = false }) => {
  const [checked, setChecked] = useState(false);
  const id = useMemo(
    () => 'toggle-' + label.split(' ').join('-').toLowerCase(),
    [label],
  );

  const handleChange = e => {
    setChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div>
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id={id}
            type="checkbox"
            className="hidden"
            onChange={handleChange}
            disabled={disabled}
          />
          <div
            className={`toggle_block w-10 h-4 rounded-full shadow-inner transition-colors ${
              checked ? 'bg-blue-900' : 'bg-gray-300'
            }`}
          ></div>
          <div
            className={`toggle_dot absolute w-6 h-6 rounded-full shadow -top-1 transition-all duration-300 ease-in-out ${
              checked ? 'translate-x-6 bg-blue-500' : '-translate-x-1 bg-white'
            }`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{label}</div>
      </label>
    </div>
  );
};

export default Toggle;
