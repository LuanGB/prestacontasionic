import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-provider'
import { ListPage } from '../list/list';
import { Wellcome } from '../wellcome/wellcome'

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public authService: AuthService) {
    this.pages = [
      { title: 'Livros', component: ListPage }
    ];

  }

  public logout() {
  	this.authService.signOut().then(() => this.navCtrl.setRoot(Wellcome));
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
