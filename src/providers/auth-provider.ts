import { Injectable } from '@angular/core';
import { Facebook } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth, public platform: Platform) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
  if (this.platform.is('cordova')) {
    Facebook.login(['public_profile', 'email']).then(facebookData => {
      let provider = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);
      console.log('facebook accessToken: ' + facebookData.authResponse.accessToken);
      return firebase.auth().signInWithCredential(provider);
    });
  } else {

    return this.auth$.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }
}

  //signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
  //  return this.auth$.login({
  //    provider: AuthProviders.Facebook,
  //    method: AuthMethods.Popup
  //  });
  //}

  signInWithEmail(user, password): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
			email: user,
			password: password,
		},
		{
			provider: AuthProviders.Password,
			method: AuthMethods.Password,
		});
  }

  signOut(): Promise<void> {
    return this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.facebook.displayName;
    } else {
      return '';
    }
  }
}