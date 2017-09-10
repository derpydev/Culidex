export class Recipe {
  id: string
  name: string
  imageUrl: string
  prepTime: string
  cookTime: string
  servings: number
  ingredients: string[]
  instructions: string[]

  constructor(id: string) {
    this.id = id
  }
}
