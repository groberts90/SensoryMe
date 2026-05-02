import { useState, useEffect } from "react";

export default function Toast() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("Added to toolkit");

  // Example trigger (replace with real logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [show]);

  if (!show) return null;

  return (
    <div className="toast show">
      <span className="toast-icon">✓</span>
      <span>{message}</span>
    </div>
  );
}
