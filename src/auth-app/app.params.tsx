import { auth } from 'firebase';

export type AppParams = {
  firebaseAuth: auth.Auth;
  Head: any;
  disableSignUp?: boolean;
  socialLoginMessage?: string;
  providers: {
    googleProvider?: any;
    facebookProvider?: any;
    twitterProvider?: any;
    githubProvider?: any;
    emailProvider?: any;
  };
  errorDictionary: {
    [key: string]: string;
    'same-password'?: any;
  };
  emailFormOptions?: {
    buttonLoginName?: string;
    buttonSignUpName?: string;
    emailPlaceHolder?: string;
    passwordPlaceHolder?: string;
    validationEmail?: string;
    validationPassword?: string;
    confirmPasswordHolder?: string;
    buttonBackFromSignUpName?: string;
  };
};
