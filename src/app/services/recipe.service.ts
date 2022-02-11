import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../models";
import {Injectable} from "@angular/core";

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {
  }


  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:8080/api/recipes')
    // return this.http.get<Customer>('https://csf-day6.herokuapp.com/api/customer')
  }

/*  fetch() {
    this.http.get<ToDo[]>('http://localhost:8080/api/tasks')
      .subscribe((todoArr) => {
        console.log(JSON.stringify(todoArr));
        this.taskChanged.next(todoArr);
        this.dex.bulkPut(todoArr);
      })
  }*/


  getRecipe(recipeId: string): Observable<Recipe> {
    const url = `http://localhost:8080/api/recipe/${recipeId}`
    console.log(url);
    return this.http.get<Recipe>(`http://localhost:8080/api/recipe/${recipeId}`)
  }

  postRecipe(recipe: Recipe) {
    console.log(recipe)
    this.http.post('http://localhost:8080/api/recipe', recipe)
      .subscribe((res) => {
        console.log(res);
      })

  }
}
