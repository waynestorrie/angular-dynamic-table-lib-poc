import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableLibraryComponent } from './dynamic-table-library.component';

import { DynamicTableModule } from './dynamic-table/dynamic-table.module';

import { DynamicTableLibraryRoutes } from './dynamic-table-library.routing';

import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicTableModule,
    DynamicTableLibraryRoutes
  ],
  declarations: [
    DynamicTableLibraryComponent,
    MainComponent
  ],
  exports: [DynamicTableLibraryComponent]
})

export class DynamicTableLibraryModule { }
