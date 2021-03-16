import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { IonSlides } from '@ionic/angular';

export interface PatternInf {
  number: number,
  title: string,
  src: string,
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  items: PatternInf[] = [];
  isFullItems = false;

  _36patterns = [
    {number: 1, title: 'Dao động ngang', src: 'assets/36patterns/pattern1.png', description: 'Tăng khi: mới tăng; Tin cậy: Cao' },
    {number: 2, title: 'Dao động ngang', src: 'assets/36patterns/pattern2.png', description: 'Giảm khi: mới giảm; Tin cậy: Cao' },
    {number: 3, title: 'Dao động ngang', src: 'assets/36patterns/pattern3.png', description: 'Giảm khi: tăng lâu; Tin cậy: Cao' },
    {number: 4, title: 'Dao động ngang', src: 'assets/36patterns/pattern4.png', description: 'Tăng khi: giảm lâu; Tin cậy: Cao' },
    {number: 5, title: 'Dao động xuống', src: 'assets/36patterns/pattern5.png', description: 'Tăng khi: bất kỳ; Tin cậy: Cao' },
    {number: 6, title: 'Dao động xuống', src: 'assets/36patterns/pattern6.png', description: 'Tăng khi: bất kỳ; Tin cậy: Cao' },
    {number: 7, title: 'Dao động lên', src: 'assets/36patterns/pattern7.png', description: 'Giảm khi: bất kỳ; Tin cậy: Cao' },
    {number: 8, title: 'Dao động lên', src: 'assets/36patterns/pattern8.png', description: 'Giảm khi: bất kỳ; Tin cậy: Cao' },
    {number: 9, title: 'Phễu ngang', src: 'assets/36patterns/pattern9.png', description: 'Tăng khi: mới tăng; Tin cậy: Cao' },
    {number: 10, title: 'Phễu ngang', src: 'assets/36patterns/pattern10.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 11, title: 'Phễu ngang', src: 'assets/36patterns/pattern11.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 12, title: 'Phễu ngang', src: 'assets/36patterns/pattern12.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 13, title: 'Phễu ngang', src: 'assets/36patterns/pattern13.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 14, title: 'Phễu ngang', src: 'assets/36patterns/pattern14.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 15, title: 'Phễu ngang', src: 'assets/36patterns/pattern15.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 16, title: 'Phễu ngang', src: 'assets/36patterns/pattern16.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 17, title: 'Phễu ngang', src: 'assets/36patterns/pattern17.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 18, title: 'Phễu ngang', src: 'assets/36patterns/pattern18.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 19, title: 'Phễu ngang', src: 'assets/36patterns/pattern19.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 20, title: 'Phễu ngang', src: 'assets/36patterns/pattern20.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 21, title: 'Phễu ngang', src: 'assets/36patterns/pattern21.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 22, title: 'Phễu ngang', src: 'assets/36patterns/pattern22.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 23, title: 'Phễu ngang', src: 'assets/36patterns/pattern23.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 24, title: 'Phễu ngang', src: 'assets/36patterns/pattern24.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 25, title: 'Phễu ngang', src: 'assets/36patterns/pattern25.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 26, title: 'Phễu ngang', src: 'assets/36patterns/pattern26.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 27, title: 'Phễu ngang', src: 'assets/36patterns/pattern27.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 28, title: 'Phễu ngang', src: 'assets/36patterns/pattern28.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 29, title: 'Phễu ngang', src: 'assets/36patterns/pattern29.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 30, title: 'Phễu ngang', src: 'assets/36patterns/pattern30.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 31, title: 'Phễu ngang', src: 'assets/36patterns/pattern31.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 32, title: 'Phễu ngang', src: 'assets/36patterns/pattern32.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 33, title: 'Phễu ngang', src: 'assets/36patterns/pattern33.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 34, title: 'Phễu ngang', src: 'assets/36patterns/pattern34.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 35, title: 'Phễu ngang', src: 'assets/36patterns/pattern35.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
    {number: 36, title: 'Phễu ngang', src: 'assets/36patterns/pattern36.png', description: 'Giảm khi: mới giảm;; Tin cậy: Cao' },
  ];

  @ViewChild('slider', {static: true}) slider: IonSlides;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    if (this.items.length === 0) {
      this.items.push(this._36patterns[0], this._36patterns[1]);
    }
  }

  addMoreItems() {
    if (this.items.length < this._36patterns.length) {
      this.slider.getActiveIndex().then((index: number) => {
        if (index < this._36patterns.length - 1){
          this.items.push(this._36patterns[index+1])
        } else {
          this.isFullItems = true;
        }
      });
    }
  }
}
