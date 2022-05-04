import React, { useState, useEffect } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(null);
  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return width;
};

export default useWidth;
