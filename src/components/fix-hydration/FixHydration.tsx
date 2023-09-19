import React, { useState, useEffect } from 'react';

type Props = {
  children?: React.ReactNode;
};

// if you don't know what this container do , you can read this link
// https://nextjs.org/docs/messages/react-hydration-error
export const FixHydration = ({ children }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  });

  return isClient ? children : null;
};
