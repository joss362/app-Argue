import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:()=> import('./auth/features/auth.routers')

    },
    {
        path:'task',
        loadChildren:()=> import('./task/features/task.routes'),
    },
    {
        path:'**',
        redirectTo: '/Sing-in',
        
    }
    
        ];
