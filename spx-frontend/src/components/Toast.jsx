import React, { useEffect } from "react";
import "../styles/components/_toast.scss";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000); // Auto-close in 2 sec
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="toast">{message}</div>;
};

export default Toast;
