import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DynamicTableLibraryComponent } from './dynamic-table-library.component';

export const routes: Routes = [
  {
    path: '',
    component: DynamicTableLibraryComponent,
    children: [
      {
        path: '',
        redirectTo: 'task-notes',
        pathMatch: 'full'
      },
      {
        path: 'task-notes',
        component: MainComponent
      }
    ]
  }
];

export const DynamicTableLibraryRoutes: ModuleWithProviders =
  RouterModule.forChild(routes);
