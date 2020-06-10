import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DynamicTableComponent } from './dynamic-table.component';
import { AppRoutes } from './dynamic-table.routing';

@NgModule({
  declarations: [
    DynamicTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [DynamicTableComponent]
})
export class AppModule { }
