import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LectureComponent } from './lecture.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Lecture1Component } from '@app/lecture/components/lecture1/lecture1.component';
import { Lecture2Component } from '@app/lecture/components/lecture2/lecture2.component';
import { Lecture3Component } from '@app/lecture/components/lecture3/lecture3.component';
import { Lecture12Component } from '@app/lecture/components/lecture12/lecture12.component';
import { Lecture13Component } from '@app/lecture/components/lecture13/lecture13.component';
import { Lecture11Component } from '@app/lecture/components/lecture11/lecture11.component';
import { Lecture10Component } from '@app/lecture/components/lecture10/lecture10.component';
import { Lecture9Component } from '@app/lecture/components/lecture9/lecture9.component';
import { Lecture4Component } from '@app/lecture/components/lecture4/lecture4.component';
import { Lecture5Component } from '@app/lecture/components/lecture5/lecture5.component';
import { Lecture6Component } from '@app/lecture/components/lecture6/lecture6.component';
import { Lecture7Component } from '@app/lecture/components/lecture7/lecture7.component';
import { Lecture8Component } from '@app/lecture/components/lecture8/lecture8.component';
import { Foxandrabbit1Component } from '@app/lecture/components/foxandrabbit1/foxandrabbit1.component';
import { Foxandrabbit3Component } from '@app/lecture/components/foxandrabbit3/foxandrabbit3.component';
import { Foxandrabbit2Component } from '@app/lecture/components/foxandrabbit2/foxandrabbit2.component';
import { Cotan1Component } from '@app/lecture/components/cotan1/cotan1.component';

const routes: Routes = [
  { path: '', component: LectureComponent, data: { title: marker('Lectures') } },
  { path: '1', component: Lecture1Component, data: { title: marker('') } },
  { path: '2', component: Lecture2Component, data: { title: marker('') } },
  { path: '3', component: Lecture3Component, data: { title: marker('') } },
  { path: '4', component: Lecture4Component, data: { title: marker('') } },
  { path: '5', component: Lecture5Component, data: { title: marker('') } },
  { path: '6', component: Lecture6Component, data: { title: marker('') } },
  { path: '7', component: Lecture7Component, data: { title: marker('') } },
  { path: '8', component: Lecture8Component, data: { title: marker('') } },
  { path: '9', component: Lecture9Component, data: { title: marker('') } },
  { path: '10', component: Lecture10Component, data: { title: marker('') } },
  { path: '11', component: Lecture11Component, data: { title: marker('') } },
  { path: '12', component: Lecture12Component, data: { title: marker('') } },
  { path: '13', component: Lecture13Component, data: { title: marker('') } },
  { path: 'foxrabbit1', component: Foxandrabbit1Component, data: { title: marker('') } },
  { path: 'foxrabbit2', component: Foxandrabbit2Component, data: { title: marker('') } },
  { path: 'foxrabbit3', component: Foxandrabbit3Component, data: { title: marker('') } },
  { path: 'cotan1', component: Cotan1Component, data: { title: marker('') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LectureRoutingModule {}
