import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2'

import { ListPage } from '../list/list';
import { Wellcome } from '../wellcome/wellcome'

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any}>;

  af_auth: AngularFireAuth = this.navPrm.get("auth");

  constructor(public navCtrl: NavController, public navPrm: NavParams) {
    this.pages = [
      { title: 'Livros', component: ListPage }
    ];

  }

  public logout() {
  	this.af_auth.logout().then(() => {this.navCtrl.setRoot(Wellcome)});
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.nav.setRoot(page.component);
  }
}
