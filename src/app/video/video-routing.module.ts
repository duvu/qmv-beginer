import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './video.component';
import { LectureComponent } from '@app/lecture/lecture.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  { path: '', component: VideoComponent, data: { title: marker('Videos') }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
