import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dt-notes-group-table',
  templateUrl: './notes-group-table.component.html',
  styleUrls: ['./notes-group-table.component.less']
})
export class NotesGroupTableComponent implements OnInit {
  @Input() data;
  @Input() tableConfig;

  constructor() { }

  ngOnInit() {
  }

}
