import { Component } from '@angular/core'
import {Validators, FormBuilder, FormGroup } from '@angular/forms'
import { RecipeService } from '../../app/recipe.service'
import { NavController } from 'ionic-angular'
import { Events } from 'ionic-angular'

@Component({
  templateUrl: 'edit.html'
})
export class EditPage {
  public recipe : FormGroup;
  recipes: RecipeService

  constructor( private formBuilder: FormBuilder, rs: RecipeService, public nav: NavController, public events: Events) {
    this.recipes = rs
    this.recipe = this.formBuilder.group({
      name: ['', Validators.required],
      imageUrl: [''],
      prepTime: [''],
      cookTime: [''],
      servings: [''],
    });
  }
  async saveForm(){
    console.log('SAVE GOT CALLED')
    await this.recipes.save(this.recipe.value)
    this.events.publish('refresh-recipes')
    this.nav.pop()

  }

  cancel() {
    console.log('CANCEL GOT CALLED')
    this.nav.pop()
  }
}
