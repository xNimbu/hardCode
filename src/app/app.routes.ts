import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./vista/vista.component').then(m => m.VistaComponent)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
