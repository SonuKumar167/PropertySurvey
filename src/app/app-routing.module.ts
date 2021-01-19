import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WardAddBlockComponent } from './ward-add-block/ward-add-block.component';
import { AdminGuardGuard } from './admin-guard.guard';
const routes: Routes = [
  {
    path:'',redirectTo:'Login',pathMatch:'full'
  },
  {
    component:LoginComponent, path:'Login'
  },
  {
    component:DashboardComponent, path:'Dashboard', canActivate:[AdminGuardGuard]
  },
  {
    component:WardAddBlockComponent, path:'WardBlock', canActivate:[AdminGuardGuard]
  },
  
  { path: 'property_details', loadChildren: () => import('./property-details/property-details.module').then(m => m.PropertyDetailsModule) },
  { path: 'Shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
