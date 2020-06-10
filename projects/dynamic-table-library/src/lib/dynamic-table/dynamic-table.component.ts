import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TableConfig } from './table-config';

@Component({
  selector: 'dt-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicTableComponent implements OnInit {
  @Input() dataset: any[];
  @Input() tableConfig: TableConfig;

  constructor() { }

  ngOnInit() {
  }

}
