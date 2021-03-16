import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LectureComponent } from './lecture.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  { path: '', component: LectureComponent, data: { title: marker('Lectures') }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectureRoutingModule { }
