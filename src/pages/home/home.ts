import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  recipes: object[];

  constructor(public navCtrl: NavController) {
    this.recipes = [
      {
        name: "Basic Fruit Salad",
        ingredients: [
          "1 apple",
          "1 banana",
          "1 orange",
          "1 cup grapes"
        ],
        instructions: [
          "Cut the apple into cubes.",
          "Cut the banana into slices.",
          "Peel the orange, and divide into segments.",
          "Combine all ingredients in a bowl.",
          "Mix to combine.",
          1,1,1,3,4,1,1,1,1,1
        ],
        cookTime: "N/A",
        prepTime: "20 min",
        yield: "5 servings"
      },
      {
        name: 2,
        ingredients: [1,2,3,4,5],
        instructions: [1,2,3,4,5]
      },
      {
        name: 3,
        ingredients: [1,2,3,4,5],
        instructions: [1,2,3,4,5]
      }
    ]
  }

  onSlideChanged() {
    this.slides.setElementStyle('height', 'auto')
  }

}
