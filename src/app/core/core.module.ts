import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    SharedModule,
    NavBarComponent
  ]
})
export class CoreModule { }
