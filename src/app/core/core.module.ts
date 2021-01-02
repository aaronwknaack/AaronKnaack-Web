import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SharedModule,
    NavBarComponent
  ]
})
export class CoreModule { }
