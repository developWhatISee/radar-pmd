import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-warning-processed',
  templateUrl: './warning-processed.component.html',
  styleUrls: ['./warning-processed.component.scss']
})
export class WarningProcessedComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
