// @flow
import { service, injectNavigator } from 'react-garden-kit';
import { auth } from 'firebase';
import { AppController as AppAuthController } from './auth-app';
import { firebaseAppAuth } from './AuthParams';
import { observable } from 'mobx';

@service({})
class AuthController extends AppAuthController {
  firebaseAuth = firebaseAppAuth;
  @injectNavigator() nav: any = '';
  @observable isAuth = false;

  firebaseProfile: auth.Auth | undefined;

  async init() {
    console.log(this.nav);
    await super.init();
  }
}
export default AuthController;
