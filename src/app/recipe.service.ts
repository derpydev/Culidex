import { Injectable } from '@angular/core'
import { Recipe } from '../models/recipe'
import { Storage } from '@ionic/storage'
import { HTTP } from '@ionic-native/http'

@Injectable()
export class RecipeService {
  private storage: Storage
  private http: HTTP
  private setup: Promise<any>

  constructor() {
    this.storage = new Storage({name: 'culidex'})
    this.http = new HTTP()
    this.initStorage()
  }

  async initStorage() {
    await this.storage.ready()
    await this.storage.clear()
    const raw = await this.http.get('assets/preload.json', {}, {})
    const data = JSON.parse(raw.data)
    data.entries().forEach(async ([ key, recipe ]) => {
      await this.storage.set(key, recipe)
    })
  }

  async getAll(): Promise<Recipe[]> {
    await this.setup
    const promise: Promise<Recipe[]> = new Promise((resolve, reject) => {
      const recipes: Recipe[] = new Array<Recipe>()
      this.storage.forEach((v, k, i) => {
        const recipe: Recipe = JSON.parse(v)
        recipes.push(recipe)
      })
      .then(() => resolve(recipes))
      .catch(reject)
    })
    return promise
  }
}
