import { useEffect } from 'react';

export default function useClickOutside(ref, onClick) {
  const handleClick = (e) => {
    if (ref.current?.contains(e.target)) {
      return;
    }

    onClick();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
}
