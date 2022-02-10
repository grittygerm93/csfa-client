import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', component: ** },
  // {path: 'number/:num', component: **, canActivate: [GuardService], canDeactivate: [GuardService]},
  // {path: '**', redirectTo: '/one', pathMatch: 'full'},
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
