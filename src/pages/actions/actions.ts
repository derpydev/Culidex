import { Component } from '@angular/core'
import { ViewController, NavController } from 'ionic-angular'
import { EditPage } from '../edit/edit'

@Component({
  templateUrl: 'actions.html'
})
export class ActionsPage {

  nav: NavController
  viewCtrl: ViewController

  constructor(viewCtrl: ViewController, nav: NavController) {
    this.nav = nav
    this.viewCtrl = viewCtrl
  }

  add() {
    this.nav.push(EditPage)
    this.viewCtrl.dismiss()
  }

  edit() {
    this.viewCtrl.dismiss()
  }

  delete() {
    this.viewCtrl.dismiss()
  }

}
