import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent, DashboardComponent } from './components';
import { AuthGuard } from './guards';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
