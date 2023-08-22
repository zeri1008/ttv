import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTestComponent } from './header-test.component';



@NgModule({
  declarations: [
    HeaderTestComponent
  ],
  exports: [
    HeaderTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderTestModule { }
