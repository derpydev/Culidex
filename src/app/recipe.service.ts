import { Injectable } from '@angular/core'
import { Recipe } from '../models/recipe'

@Injectable()
export class RecipeService {
  getAll(): Recipe[] {
    const recipe1 = new Recipe('Basic Fruit Salad')
    recipe1.imageUrl = 'assets/fruit-salad.jpg'
    recipe1.ingredients = [
      '1 apple',
      '1 banana',
      '1 orange',
      '1 cup grapes'
    ]
    recipe1.instructions = [
      'Cut the apple into cubes.',
      'Cut the banana into slices.',
      'Peel the orange, and divide into segments.',
      'Combine all ingredients in a bowl.',
      'Mix to combine.'
    ]
    recipe1.cookTime = 'N/A'
    recipe1.prepTime = '20 min'
    recipe1.servings = 5


    const recipe2 = new Recipe('Basic Fruit Salad')
    recipe2.imageUrl = 'assets/fruit-salad.jpg'
    recipe2.ingredients = [
      '1 apple',
      '1 banana',
      '1 orange',
      '1 cup grapes'
    ]
    recipe2.instructions = [
      'Cut the apple into cubes.',
      'Cut the banana into slices.',
      'Peel the orange, and divide into segments.',
      'Combine all ingredients in a bowl.',
      'Mix to combine.',
      'Extra line!',
      'Extra line!',
      'Extra line!',
      'Extra line!'
    ]
    recipe2.cookTime = 'N/A'
    recipe2.prepTime = '20 min'
    recipe2.servings = 5

    return [recipe1, recipe2]
  }
}
