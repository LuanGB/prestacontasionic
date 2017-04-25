import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../../providers/auth-provider';
import { HomePage } from '../../home/home'

@Component({
	selector: 'page-signin',
	templateUrl: 'signin.html'
})
export class SignIn {
	private user = {}

	constructor(public navCtrl: NavController, public authservice: AuthService) {

	}

	public loginWithEmail() : void {
		this.authservice.signInWithEmail(this.user["email"], this.user["password"]).then(() => {
			this.navCtrl.setRoot(HomePage)
		});
	}

	public loginWithFacebook() : void {
		this.authservice.signInWithFacebook().then(() => {
			this.navCtrl.setRoot(HomePage)
		});
	}
}
