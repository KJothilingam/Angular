import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [
    // {path :'' ,redirectTo : '/home',    pathMatch: 'full'}
    {path :'' , component : HomeComponent},
    // { path: 'about/:id', component: AboutComponent }
    {
        path:'',
        loadComponent :()=>import('./Pages/home/home.component').then((c)=> c.HomeComponent),
    },
    {
        path:'about',
        loadComponent :()=>import('./Pages/about/about.component').then((c)=> c.AboutComponent),
    },
    {
        path:'admin',
        loadComponent :()=>import('./Pages/admin/admin.component').then((c)=> c.AdminComponent),
    },
    {
        path:'courses',
        loadComponent :()=>import('./Pages/courses/courses.component').then((c)=> c.CoursesComponent),
    }
];
