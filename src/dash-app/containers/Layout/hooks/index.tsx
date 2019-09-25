import { useState } from 'react';

export function useLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return {
    openSidebar,
    setOpenSidebar,
  };
}
