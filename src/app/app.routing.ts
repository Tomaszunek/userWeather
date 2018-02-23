import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { PsychetestComponent } from './psycheTest/index';
import { PsycheMainComponent } from './psycheMain/index';
import { AuthGuard } from './_guards/index';
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'psychetest', component: PsychetestComponent, canActivate: [AuthGuard]},
    { path: 'psyche', component: PsycheMainComponent, canActivate: [AuthGuard]},
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);
