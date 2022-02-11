import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  rList: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(recipes => {
      console.log(recipes)
      this.rList = recipes
    });
  }

  onClick(item: Recipe) {
    console.log(item.id)
    this.router.navigate(['/recipe',item.id])

  }
}
