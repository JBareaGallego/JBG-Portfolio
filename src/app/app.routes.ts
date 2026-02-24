import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: ()=> import('./dashboard/dashboard.component'),
    children: [
      { path:'es/resume', loadComponent: ()=> import('./dashboard/pages/spanishCV/spanish.component') },
      { path:'es/proyectos', loadComponent: ()=> import('./dashboard/pages/projects-page-Spanish/projects-page-spanish.component')},
      { path:'en/projects', loadComponent: ()=> import('./dashboard/pages/projects-page/projects-page.component') },
      { path:'en/resume', loadComponent: ()=> import('./dashboard/pages/cv-page/cv-page.component') },
      { path: '', redirectTo: 'en/projects' , pathMatch: 'full' }
    ]
  },
  { path:'', redirectTo:'/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo:'/dashboard', pathMatch: 'full' }
];
