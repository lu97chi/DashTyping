import { useState } from 'react';

export function UserNavbar() {
    const [ drawerOpen, setDrawerOpen ] = useState(false);

    return {
        drawerOpen,
        setDrawerOpen
    }
}