import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {RecipeService} from "../services/recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipeadd',
  templateUrl: './recipeadd.component.html',
  styleUrls: ['./recipeadd.component.css']
})
export class RecipeaddComponent implements OnInit {
  form: FormGroup;
  formArr: FormArray;

  constructor(private recipeService: RecipeService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formArr = new FormArray([
      // new FormGroup( {a: this.fb.control('', [Validators.required, Validators.minLength(3)])}),
      new FormControl('', [Validators.required, Validators.minLength(3)]),
    ], Validators.required);

    this.form = this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      ingredients: this.formArr,
      instructions: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      image: this.fb.control('', Validators.required)
    });

    console.log(this.formArr.status);

  }


  add() {
    this.recipeService.postRecipe(this.form.value);
    this.form.reset();
    (this.form.get('ingredients') as FormArray).clear();
    this.addIngredient();
  }

  addIngredient() {
    this.formArr.push(this.fb.control('', [Validators.required, Validators.minLength(3)]))
    // this.formArr.push(this.fb.control(''))
  }

  removeIngredient(item: AbstractControl) {
    // console.log(item);
    console.log(this.formArr.controls.indexOf(item));
    this.formArr.removeAt(this.formArr.controls.indexOf(item));
  }

/*  updateFormValidity($event: HTMLInputElement, ingredient: AbstractControl) {
    if($event.value.length > 3) {
      console.log($event.value)
      ingredient.setErrors(null)
    }
    else {
      ingredient.setErrors({'incorrect': true})
    }
  }*/

  goBack() {
    this.form.reset();
    this.router.navigate(["/"]);
  }
}
