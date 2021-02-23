import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  @Input() reportsList;
  @Input() type;
  constructor() { }

  ngOnInit(): void { }

  openReport(item) {
    if (item && item.id) {
      let url = 'https://ny.matrix.ms.com/eqr/article/webapp/' + item.id;
      window.open(url, '_blank');
    }
  }

}
