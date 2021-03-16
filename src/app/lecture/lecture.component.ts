import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {

  lectureList = [
    { route: 1, label: 'Bài 1: Kiểm soát cảm xúc để thành công'},
    { route: 2, label: 'Bài 2: Hiểu chu kỳ kinh tế, thị trường và tâm lý'},
    { route: 3, label: 'Bài 3: Hiểu sự luân chuyển của dòng tiền'},
    { route: 4, label: 'Bài 4: Hiểu sự luân chuyển của dòng tiền'},
    { route: 5, label: 'Bài 5: Hiểu sự luân chuyển của dòng tiền'},
    { route: 6, label: 'Bài 6: Hiểu sự luân chuyển của dòng tiền'},
    { route: 7, label: 'Bài 7: Hiểu sự luân chuyển của dòng tiền'},
    { route: 8, label: 'Bài 8: Hiểu sự luân chuyển của dòng tiền'},
    { route: 9, label: 'Bài 9: Hiểu sự luân chuyển của dòng tiền'},
    { route: 10, label: 'Bài 10: Hiểu sự luân chuyển của dòng tiền'},
    { route: 11, label: 'Bài 11: Hiểu sự luân chuyển của dòng tiền'},
    { route: 12, label: 'Bài 12: Hiểu sự luân chuyển của dòng tiền'},
    { route: 13, label: 'Bài 13: Hiểu sự luân chuyển của dòng tiền'},
  ];

  constructor() { }

  ngOnInit(): void {
    // const options: DocumentViewerOptions = {
    //   title: 'My PDF'
    // }
    // this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
  }

}
