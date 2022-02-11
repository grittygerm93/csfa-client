import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipelistComponent} from "./recipelist/recipelist.component";
import {RecipedetailComponent} from "./recipedetail/recipedetail.component";
import {RecipeaddComponent} from "./recipeadd/recipeadd.component";

const routes: Routes = [
  {path: '', component: RecipelistComponent },
  {path: 'add', component: RecipeaddComponent },
  {path: 'recipe/:recipeId', component: RecipedetailComponent },
  // {path: 'recipe/:recipeId', component: RecipedetailComponent, canActivate: [GuardService], canDeactivate: [GuardService]},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
