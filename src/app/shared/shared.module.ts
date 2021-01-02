import { NgModule } from '@angular/core';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    StickyHeaderComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule,
    StickyHeaderComponent
  ]
})
export class SharedModule { }
