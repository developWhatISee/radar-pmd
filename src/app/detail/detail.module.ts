import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { ShareModule } from '../share/share.module';
import { DetailComponent } from './detail.component';
import { ReasonListComponent } from './reason-list/reason-list.component';


@NgModule({
  declarations: [
    DetailComponent,
    ReasonListComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ShareModule
  ]
})
export class DetailModule { }
