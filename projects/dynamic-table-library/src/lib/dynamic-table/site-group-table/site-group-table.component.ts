import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dt-site-group-table',
  templateUrl: './site-group-table.component.html',
  styleUrls: ['./site-group-table.component.less']
})
export class SiteGroupTableComponent implements OnInit {
  @Input() data;
  @Input() tableConfig;

  constructor() { }

  ngOnInit() {
  }

}
