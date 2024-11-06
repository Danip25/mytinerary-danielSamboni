import { useState } from 'react';
import NotifyContext from '../context/NotifyContext';

const NotifyProvider = ({ children }) => {
  const [notify, setNotify] = useState({ message: '', type: '' });

  const notifyHandler = (message, type) => {
    setNotify({ message, type });
    setTimeout(() => {
      setNotify({ message: '', type: '' });
    }, 3000);
  };

  return (
    <NotifyContext.Provider value={notifyHandler}>
      {notify.message && (
        <div
          className={`fixed z-[1000000000000] w-full flex justify-center pt-8`}
        >
          <p className=" bg-red-600 w-max p-4 rounded-xl text-white animate-pulse">
            {notify.message}
          </p>
        </div>
      )}
      {children}
    </NotifyContext.Provider>
  );
};

export default NotifyProvider;
