// @flow
import { auth } from 'firebase';

export class AppController {
  firebaseAuth: auth.Auth | undefined;

  authInstance: any;

  isAuth: boolean = false;
  async init() {
    if (this.firebaseAuth)
      this.firebaseAuth.onAuthStateChanged((authInstance) => {
        if (authInstance) {
          this.isAuth = true;
          this.authInstance = authInstance;
        }
      });
  }
}
