import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.scss']
})
export class PageTabsComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  homePage: boolean = true;
  userPage: boolean = false;
  currentRouter: string = '';
  

  ngOnInit(): void { 
    this.currentRouter = this.router.url;
  }

  onClick() {
    this.currentRouter = this.router.url;
  }
}
