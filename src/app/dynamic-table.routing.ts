import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'table',
                pathMatch: 'full'
            },
            {
                path: 'table',
                loadChildren:  './table/table.module#TableModule'
            },
        ]
    }
];

export const AppRoutes: ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {useHash: true});
