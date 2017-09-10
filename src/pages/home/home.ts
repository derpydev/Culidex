import { Component, ViewChild } from '@angular/core'
import { NavController, Slides, PopoverController } from 'ionic-angular'
import { RecipeService } from '../../app/recipe.service'
import { Recipe } from '../../models/recipe'
import { ActionsPage } from '../actions/actions'
import { Events } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RecipeService]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides

  recipes: Recipe[]

  constructor(public navCtrl: NavController,
              public loader: RecipeService,
              public popoverCtrl: PopoverController,
              public events: Events) {
    this.loadRecipes()
    this.events.subscribe('refresh-recipes', () => {
      console.log('REFRESHING RECIPES')
      this.loadRecipes()
    })
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(ActionsPage)
    popover.present({ ev: event })
  }

  async loadRecipes() {
    this.recipes = await this.loader.getAll()
  }

  ngAfterViewInit() {
    this.slides.autoHeight = true
  }
}
