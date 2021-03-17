import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, TranslateModule, SharedModule, IonicModule, VideoRoutingModule],
})
export class VideoModule {}
