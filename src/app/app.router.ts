import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { LoginComponent } from './login/login.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'all-lessons',
        component: AllLessonsComponent
    },
    {
        path: 'course/:id',
        component: CourseDetailComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

