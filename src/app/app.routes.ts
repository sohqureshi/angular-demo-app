import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{
		path: 'list',
		canActivate: [AuthGuard],
		loadChildren: () => import('./list/list.module/list.module').then(m => m.ListModule)
	},
	{ path: '**', redirectTo: 'login' }
];
