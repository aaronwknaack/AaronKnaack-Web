import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modulels/dashboard/dashboard.component';
import { FruitSaladComponent } from './modulels/fruitsalad/fruitsalad.component';

const routes: Routes = [
  { path: 'fruitsalad', component: FruitSaladComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
