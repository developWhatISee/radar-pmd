import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-reason-list',
  templateUrl: './reason-list.component.html',
  styleUrls: ['./reason-list.component.scss']
})
export class ReasonListComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<ReasonListComponent>
  ) {}

  reasonList: string[] = ['就业压力', '学习问题', '系统误报', '情感问题', '同学矛盾', '家庭矛盾', '身体疾病', '抑郁' ]
  ngOnInit(): void { }
}