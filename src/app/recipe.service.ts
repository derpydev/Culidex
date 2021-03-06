import { Injectable } from '@angular/core'
import { Recipe } from '../models/recipe'
import { Storage } from '@ionic/storage'
import { Http } from '@angular/http'
import UUID from 'uuid/v4'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class RecipeService {
  private storage: Storage
  private setup: Promise<any>

  constructor(private http: Http) {
    this.storage = new Storage({ name: 'culidex' })
    this.setup = this.initStorage()
  }

  async initStorage() {
    await this.storage.ready()
    await this.storage.clear()

    const raw = await this.http.get('/assets/preload.json').toPromise()
    const data = raw.json()
    return Promise.all(
      Object.entries(data).map(([key, recipe]) =>
        this.storage.set(key, recipe)))
  }

  async getAll(): Promise<Recipe[]> {
    await this.setup
    return new Promise<Recipe[]>((resolve, reject) => {
      const recipes: Recipe[] = new Array<Recipe>()
      this.storage.forEach((recipe, id) => { recipes.push({ ...recipe, id }) })
        .then(() => resolve(recipes))
        .catch(reject)
    })
  }

  async save(recipe: Recipe): Promise<string> {
    let { id, ...value } = recipe
    id = id || UUID()
    return this.storage.set(id, value)
      //.then(_ => recipe.id)
  }
}
