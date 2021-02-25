import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'first-component', component: FirstComponentComponent },
  { path: 'second-component', component: SecondComponentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
