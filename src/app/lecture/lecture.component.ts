import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const options: DocumentViewerOptions = {
    //   title: 'My PDF'
    // }
    // this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
  }

}
