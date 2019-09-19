// @flow
import React from 'react';
import * as firebase from 'firebase';
import { AppParams } from './auth-app';

const firebaseConfig = {
  apiKey: 'AIzaSyBlARckUrHpB4-jVCv5XKc2OxaYIkwzZaA',
  authDomain: 'fir-test-aacd8.firebaseapp.com',
  databaseURL: 'https://fir-test-aacd8.firebaseio.com',
  projectId: 'fir-test-aacd8',
  storageBucket: 'fir-test-aacd8.appspot.com',
  messagingSenderId: '279631565630',
  appId: '1:279631565630:web:1d8ba870ff240cc7a7d26f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();

export const AuthParams: AppParams = {
  Head: () => <div>Tu logo aqui</div>,
  firebaseAuth: firebaseAppAuth,
  socialLoginMessage: 'O puedes acceder mediante redes sociales',
  disableSignUp: true,
  errorDictionary: {
    'auth/invalid-email': 'Correo no valido',
    'auth/wrong-password': 'Contraseña invalida o el usuario no existe',
    'auth/user-not-found':
      'No se encontro el usuario o su contraseña es incorrecta',
    'same-password': 'Las contraseñas deben ser iguales',
    'auth/email-already-in-use':
      'Este correo ya esta en uso, por favor ingrese uno distinto',
  },
  providers: {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    githubProvider: new firebase.auth.GithubAuthProvider(),
    twitterProvider: new firebase.auth.TwitterAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
    emailProvider: new firebase.auth.EmailAuthProvider(),
  },
  emailFormOptions: {
    buttonBackFromSignUpName: 'Volver',
  },
};
