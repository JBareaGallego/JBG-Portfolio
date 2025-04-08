import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: ()=> import('./dashboard/dashboard.component'),
    children: [
      { path:'es', loadComponent: ()=> import('./dashboard/pages/spanish/spanish.component') },
      { path:'en', loadComponent: ()=> import('./dashboard/pages/english/english.component') },
      { path:'projects', loadComponent: ()=> import('./dashboard/pages/projects-page/projects-page.component') },
      { path:'resume', loadComponent: ()=> import('./dashboard/pages/cv-page/cv-page.component') },
      { path: '', redirectTo: 'resume' , pathMatch: 'full' }
    ]
  },
  { path:'', redirectTo:'/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo:'/dashboard', pathMatch: 'full' }
];
