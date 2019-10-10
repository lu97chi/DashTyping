import { useState } from 'react';

export function UseCTA() {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ loading, setLoading] = useState(false);

    return {
        modalOpen,
        setModalOpen,
        loading,
        setLoading
    }
}