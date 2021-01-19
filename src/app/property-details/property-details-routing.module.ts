import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ P1AreaComponent } from './p1-area/p1-area.component';
import{ P2DetailsComponent } from './p2-details/p2-details.component';
import{ P3DetailsBuildingComponent } from './p3-details-building/p3-details-building.component';
import{ P3DetailsVacantComponent } from './p3-details-vacant/p3-details-vacant.component';
import{ P4ProTypeComponent } from './p4-pro-type/p4-pro-type.component';
import{ P5HouseShopLevelComponent } from './p5-house-shop-level/p5-house-shop-level.component';
import{ ProPicDetailsComponent } from './pro-pic-details/pro-pic-details.component';
import { PropertyDetailsComponent } from './property-details.component';
import { AdminGuardGuard } from '../admin-guard.guard';

const routes: Routes = [
  { 
    path: '', redirectTo:'pro-area',pathMatch:'full' 
  },
  {
    component:P1AreaComponent, path:'pro-area', canActivate:[AdminGuardGuard]
  },
  {
    component:P2DetailsComponent, path:'details/:ward/:block', canActivate:[AdminGuardGuard]
  },
  {
    component:P3DetailsBuildingComponent, path:'building/:sid/:ward/:block', canActivate:[AdminGuardGuard]
  },
  {
    component:P3DetailsVacantComponent, path:'vacant/:sid/:ward/:block', canActivate:[AdminGuardGuard]
  },
  {
    component:P4ProTypeComponent, path:'pro-type', canActivate:[AdminGuardGuard]
  },
  {
    component:P5HouseShopLevelComponent, path:'house-shop', canActivate:[AdminGuardGuard]
  },
  {
    component:ProPicDetailsComponent, path:'picture/:sid', canActivate:[AdminGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyDetailsRoutingModule { }
