// @flow
import { useState } from 'react';
import { FirebaseError } from 'firebase';

function useSignUpForm() {
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [error, setError] = useState<FirebaseError | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  function onEmailInput(ev: any) {
    setEmail(ev.target.value);
  }
  function onPasswordInput(ev: any) {
    setPassword(ev.target.value);
  }
  function onPasswordConfirmInput(ev: any) {
    setPasswordConfirm(ev.target.value);
  }
  function tryIt(action: Function) {
    return async (param1: any, param2: any) => {
      try {
        setLoading(true);
        await action(param1, param2);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(e);
      }
    };
  }

  return {
    openRegister,
    setOpenRegister,
    onEmailInput,
    onPasswordInput,
    onPasswordConfirmInput,
    password,
    passwordConfirm,
    email,
    tryIt,
    error,
    setError,
    loading,
  };
}

export default useSignUpForm;
