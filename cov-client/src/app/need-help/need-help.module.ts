import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributeNowModule } from '../contribute-now/contribute-now.module';
import { ContributeNowComponent } from '../contribute-now/contribute-now.component';



@NgModule({
  declarations: [],
  imports: [
    ContributeNowModule,
    ContributeNowComponent,
    CommonModule
  ]
})
export class NeedHelpModule { }
