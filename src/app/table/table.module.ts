import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableLibraryModule } from 'projects/dynamic-table-library/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    DynamicTableLibraryModule
  ],
  declarations: []
})
export class TableModule { }
