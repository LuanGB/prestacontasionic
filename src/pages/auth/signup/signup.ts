import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProviders, AngularFire, AuthMethods } from 'angularfire2';

import { HomePage } from '../../home/home'

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})
export class SignUp {
	private user = {}

	constructor(public navCtrl: NavController, public af: AngularFire) {

	}

	public signUpWithEmail() : void {
		this.af.auth.createUser({
			email: this.user["email"],
			password: this.user["password"],
		}).then(() => {this.navCtrl.setRoot(HomePage, {auth: this.af.auth})});
	}

	public signUpWithFacebook() : void {
		console.log("-----------------------------------------------------------");
		this.af.auth.login({
			provider: AuthProviders.Facebook,
			method: AuthMethods.Popup
		}).then(() => {this.navCtrl.setRoot(HomePage, {auth: this.af.auth})});
	}
}
