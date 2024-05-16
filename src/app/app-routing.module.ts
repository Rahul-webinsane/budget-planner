import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './home/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'',component:LoginComponent, pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  // {path:'home',component:HomeComponent,canActivate: [AuthGuardService]},
  {path:'home',component:HomeComponent},
  {path:'dash-board',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
