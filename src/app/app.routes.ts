import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'home' }
];
