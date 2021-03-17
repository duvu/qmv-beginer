import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectureRoutingModule } from './lecture-routing.module';
import { LectureComponent } from './lecture.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { Lecture1Component } from './components/lecture1/lecture1.component';
import { Lecture2Component } from './components/lecture2/lecture2.component';
import { Lecture3Component } from './components/lecture3/lecture3.component';
import { Lecture4Component } from './components/lecture4/lecture4.component';
import { Lecture5Component } from './components/lecture5/lecture5.component';
import { Lecture6Component } from './components/lecture6/lecture6.component';
import { Lecture7Component } from './components/lecture7/lecture7.component';
import { Lecture8Component } from './components/lecture8/lecture8.component';
import { Lecture9Component } from './components/lecture9/lecture9.component';
import { Lecture10Component } from './components/lecture10/lecture10.component';
import { Lecture11Component } from './components/lecture11/lecture11.component';
import { Lecture12Component } from './components/lecture12/lecture12.component';
import { Lecture13Component } from './components/lecture13/lecture13.component';
import { Foxandrabbit1Component } from './components/foxandrabbit1/foxandrabbit1.component';
import { Foxandrabbit2Component } from './components/foxandrabbit2/foxandrabbit2.component';
import { Foxandrabbit3Component } from './components/foxandrabbit3/foxandrabbit3.component';
import { Cotan1Component } from './components/cotan1/cotan1.component';

@NgModule({
  declarations: [
    LectureComponent,
    Lecture1Component,
    Lecture2Component,
    Lecture3Component,
    Lecture4Component,
    Lecture5Component,
    Lecture6Component,
    Lecture7Component,
    Lecture8Component,
    Lecture9Component,
    Lecture10Component,
    Lecture11Component,
    Lecture12Component,
    Lecture13Component,
    Foxandrabbit1Component,
    Foxandrabbit2Component,
    Foxandrabbit3Component,
    Cotan1Component,
  ],
  imports: [CommonModule, TranslateModule, SharedModule, IonicModule, LectureRoutingModule],
})
export class LectureModule {}
