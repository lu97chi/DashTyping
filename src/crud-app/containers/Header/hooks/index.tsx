import { useState } from 'react';

export function useHeader() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [callingFromOutside, setCallingFromOutside] = useState(false);
  const [activeConfiguration, setActiveConfiguration] = useState(null);
  const [activeButtonCaller, setActiveButtonCaller] = useState(0);
  return {
    visible,
    setVisible,
    confirmLoading,
    setConfirmLoading,
    callingFromOutside,
    setCallingFromOutside,
    activeButtonCaller,
    setActiveButtonCaller,
    activeConfiguration,
    setActiveConfiguration,
  };
}
