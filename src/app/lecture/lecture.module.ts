import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectureRoutingModule } from './lecture-routing.module';
import { LectureComponent } from './lecture.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LectureComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    IonicModule,
    LectureRoutingModule
  ]
})
export class LectureModule { }
