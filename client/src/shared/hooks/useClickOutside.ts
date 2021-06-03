import { useCallback, useEffect } from 'react';

export default function useClickOutside(ref, onClick) {
  const handleClick = useCallback(
    (e) => {
      if (ref.current?.contains(e.target)) {
        return;
      }

      onClick();
    },
    [onClick, ref]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);
}
