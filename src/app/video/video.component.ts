import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoList = [
    { videoId: 'CZccnUaryI4', label: 'Bài 1: Hiểu chu kỳ kinh tế, thị trường và tâm lý'},
    { videoId: 'MuOJ5uqVyFg', label: 'Bài 2: Hiểu sự luân chuyển các lớp cổ phiếu và dòng tiền'},
    { videoId: '92BI--OipV0', label: 'Bai 3: Hiểu và định giá cổ phiếu đơn giản'},
    { videoId: '92BI--OipV0', label: 'Bài 4: Sử dụng phân tích kỹ thuật đơn giản'},
  ];
  constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit(): void {
    this.youtube.openVideo('CZccnUaryI4');
  }

}
