import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../models";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  id: string;
  recipe: Recipe
  isLoaded: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService.getRecipe(id).subscribe(result => {
      this.recipe = result;
      console.log(result)
      this.isLoaded = true;
    });
  }


}
