import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dt-task-group-table',
  templateUrl: './task-group-table.component.html',
  styleUrls: ['./task-group-table.component.less']
})
export class TaskGroupTableComponent implements OnInit {
  @Input() data;
  @Input() tableConfig;

  constructor() { }

  ngOnInit() {
  }

}
