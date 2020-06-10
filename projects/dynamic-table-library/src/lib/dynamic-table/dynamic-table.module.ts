import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableComponent } from './dynamic-table.component';
import { SiteGroupTableComponent } from './site-group-table/site-group-table.component';
import { TaskGroupTableComponent } from './task-group-table/task-group-table.component';
import { NotesGroupTableComponent } from './notes-group-table/notes-group-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicTableComponent,
    SiteGroupTableComponent,
    TaskGroupTableComponent,
    NotesGroupTableComponent
  ],
  exports: [
    DynamicTableComponent,
    SiteGroupTableComponent,
    TaskGroupTableComponent
  ]
})
export class DynamicTableModule { }
