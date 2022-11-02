import { createContext, useContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  type: null,
  setError: () => {},
});

function useNotification() {
  const [notification, setNotification] = useState(null);
  const [type, setType] = useState(null);

  function setNotificationHandler(notification, type = 'success') {
    setNotification(notification);
    setType(type);

    setTimeout(() => {
      setNotification(null);
      setType(null);
    }, 3000);
  }

  return { notification, type, setNotification: setNotificationHandler };
}

export function NotificationProvider({ children }) {
  const notification = useNotification();
  return (
    <NotificationContext.Provider value={notification}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotificationContext() {
  return useContext(NotificationContext);
}
