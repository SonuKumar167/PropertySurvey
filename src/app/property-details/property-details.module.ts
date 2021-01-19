import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner'
import { PropertyDetailsRoutingModule } from './property-details-routing.module';
import { SharedModule } from '../shared/shared.module'
import { PropertyDetailsComponent } from './property-details.component';
import { P1AreaComponent } from './p1-area/p1-area.component';
import { P2DetailsComponent } from './p2-details/p2-details.component';
import { P3DetailsBuildingComponent } from './p3-details-building/p3-details-building.component';
import { P3DetailsVacantComponent } from './p3-details-vacant/p3-details-vacant.component';
import { P4ProTypeComponent } from './p4-pro-type/p4-pro-type.component';
import { P5HouseShopLevelComponent } from './p5-house-shop-level/p5-house-shop-level.component';
import { ProPicDetailsComponent } from './pro-pic-details/pro-pic-details.component';

@NgModule({
  declarations: [
    PropertyDetailsComponent,
    P1AreaComponent,
    P2DetailsComponent,
    P3DetailsBuildingComponent,
    P3DetailsVacantComponent,
    P4ProTypeComponent,
    P5HouseShopLevelComponent,
    ProPicDetailsComponent
  ],
  imports: [
    CommonModule,
    PropertyDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PropertyDetailsModule { }
