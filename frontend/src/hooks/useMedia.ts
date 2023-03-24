import { useState, useEffect } from 'react';

interface MediaParams {
  width: number;
  height: number;
}

function getMedia(): MediaParams {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

interface useMediaParams {}

export default function useMedia(media: number): useMediaParams {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      if (getMedia().width <= media) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return matches;
}
