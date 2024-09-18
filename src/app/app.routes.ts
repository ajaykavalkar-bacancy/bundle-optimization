import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent)
    },
    {
        path: 'certificate',
        loadComponent: () => import('./certificate/certificate.component').then(m => m.CertificateComponent)
    },
];
