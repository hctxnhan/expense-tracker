import { useNotificationContext } from '../contexts/NotificationContext';

const borderStyle = {
  success: 'border-green-500',
  error: 'border-red-500',
  warning: 'border-yellow-500',
};

function Notification() {
  const { notification, type } = useNotificationContext();
  return (
    <div className={`fixed top-3 right-3 ${notification ? 'block' : 'hidden'}`}>
      <div
        className={`max-w-[400px] py-3 px-4 bg-white shadow-lg rounded-md border-l-8 ${borderStyle[type]}`}
      >
        <p>{notification}</p>
      </div>
    </div>
  );
}

export default Notification;
