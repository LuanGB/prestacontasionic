import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProviders, AngularFire, AuthMethods } from 'angularfire2';

import { HomePage } from '../../home/home'

@Component({
	selector: 'page-signin',
	templateUrl: 'signin.html'
})
export class SignIn {
	private user = {}

	constructor(public navCtrl: NavController, public af: AngularFire) {

	}

	public loginWithEmail() : void {
		this.af.auth.login({
			email: this.user["email"],
			password: this.user["password"],
		},
		{
			provider: AuthProviders.Password,
			method: AuthMethods.Password,
		}).then(() => {this.navCtrl.setRoot(HomePage, {auth: this.af.auth})});
	}

	public loginWithFacebook() : void {
		console.log("-----------------------------------------------------------");
		this.af.auth.login({
			provider: AuthProviders.Facebook,
			method: AuthMethods.Popup
		}).then(() => {this.navCtrl.setRoot(HomePage, {auth: this.af.auth})});
	}
}
