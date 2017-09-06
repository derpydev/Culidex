import { Component } from '@angular/core'
import { ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Slides } from 'ionic-angular'
import { RecipeService } from '../../app/recipe.service'
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RecipeService]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides

  recipes: Recipe[]
  loader: RecipeService

  constructor(public navCtrl: NavController, loader: RecipeService) {
    loader.getAll().then(recipes => { this.recipes = recipes })
  }

  ngAfterViewInit() {
    this.slides.autoHeight = true
  }
}
