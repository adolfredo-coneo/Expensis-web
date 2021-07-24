import React, { useEffect } from 'react';
import classes from './Notification.module.css';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { layoutActions } from '../store/slices/layout';

const Notification: React.FC = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.layout.notification);

  let specialClasses = '';
  if (notification) {
    if (notification.status === 'error') specialClasses = classes.error;

    if (notification.status === 'success') specialClasses = classes.success;

    if (notification.status === 'info') specialClasses = classes.info;
  }

  //useEffect 5 seconds timeout to send notification null
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(layoutActions.setNotification(null));
    }, 5000);
    return () => {
      //clearTimeout
      clearTimeout(timer);
    };
  }, [notification, dispatch]);

  return (
    <div className={classes.notification}>
      {notification && (
        <section className={specialClasses}>
          <p>{notification.message}</p>
        </section>
      )}
    </div>
  );
};

export default Notification;
