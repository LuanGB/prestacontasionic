import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignIn } from '../auth/signin/signin';
import { SignUp } from '../auth/signup/signup';

@Component({
  templateUrl: 'wellcome.html'
})
export class Wellcome {

  sIn = SignIn;
  sUp = SignUp;

  constructor(public nav: NavController) {
  }

  public goTo(page) {
    this.nav.push(page);
  }

  public goBack() : void {
    this.nav.pop();
  }

}
