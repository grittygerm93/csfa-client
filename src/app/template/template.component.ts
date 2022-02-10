import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TemplateService} from "../services/template.service";
import {Deactivating} from "../models";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit, Deactivating {

  form: FormGroup;

  constructor(private fb: FormBuilder, private templateService: TemplateService,
              private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

//  In component A
//  ngOnInit with pathvariable and queryparams
//  call the function in service
//  and subscribe to service to get info from server
//  'c' needs to match what is placed in the routing module
/*  ngOnInit(): void {
    this.city = this.activatedRoute.snapshot.params['c'];
    let params = this.activatedRoute.snapshot.queryParams['field'];
    console.log(params)

    this.weatherService.getWeather(this.city)
      .pipe(map((e: Weather[]) => e[0]))
      .subscribe(result => {
        this.weather = result;
      });
  }*/

  //In component B
  //submit and navigate to specific location.. also configure it in routing module
  //using queryparams
/*  onSubmit() {
    const city = this.form.get('city').value;
    this.form.reset();
    let params = {field: 'halo'}
    this.route.navigate(['/city', city], {queryParams: params})
  }*/

//  sample form creation
/*  ngOnInit(): void {
    this.num = parseInt(this.activatedRoute.snapshot.params['num']);
    this.form = this.fb.group({
      text: this.fb.control('', [Validators.required, nonWhiteSpace])
    })
  }*/

//  deactivating and evaluate function
/*  evaluate(): boolean | Promise<boolean> {
    //cannot leave if it's not valid and not dirty
    //user hasnt saved his work
    return this.form.invalid || this.form.dirty;
  }*/

  //custom validator
/*  function nonWhiteSpace(c: FormControl) {
    return c.value.trim().length > 0 ? null: {nonWhiteSpace: true} as ValidationErrors;
  }*/

}
