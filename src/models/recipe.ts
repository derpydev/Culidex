export class Recipe {
  name: string
  imageUrl: string
  prepTime: string
  cookTime: string
  servings: number
  ingredients: string[]
  instructions: string[]

  constructor(name: string) {
    this.name = name
  }
}
