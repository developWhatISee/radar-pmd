import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-warning-pending',
  templateUrl: './warning-pending.component.html',
  styleUrls: ['./warning-pending.component.scss']
})
export class WarningPendingComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
