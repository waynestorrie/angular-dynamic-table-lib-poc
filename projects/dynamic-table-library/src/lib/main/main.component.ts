import { Component, OnInit } from '@angular/core';


import { DataService } from '../data.service';
import { TableConfig } from '../dynamic-table/table-config';

@Component({
  selector: 'dt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})

export class MainComponent implements OnInit {
  taskNotes: any[];
  tableConfig: TableConfig;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getMockNotes();
    this.initializeTable();
  }

  getMockNotes() {
    this.dataService
      .getMockNotes()
      .subscribe((data) => {
        this.taskNotes = data;
      });
  }

  initializeTable() {
    this.tableConfig = new TableConfig(
      [
        { propertyId: 'Body', selectorId: 'Content', columnWidth: 50, label: 'Job' },
        { propertyId: 'CreatedBy', selectorId: 'Content', columnWidth: 20, label: 'Created by' },
        { propertyId: 'CreatedDate', selectorId: 'Content', columnWidth: 15, label: 'Date created' },
        { propertyId: 'Attachments', selectorId: 'Content', columnWidth: 15, label: 'Files' }
      ]
    );
  }
}
