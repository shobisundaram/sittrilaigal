import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/modules.routes').then(m => m.ModuleRoutes)
    },
    { path: '**', redirectTo: '' }
];
