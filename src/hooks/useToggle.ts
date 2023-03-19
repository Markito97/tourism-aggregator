import { useState } from 'react';

export function useToggle(): [boolean, () => void] {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleToggle = (): void => {
    void setIsToggle(!isToggle);
  };

  return [isToggle, handleToggle];
}
