import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MasterRoutingModule } from './master-routing.module';
import { AddUomComponent } from './add-uom/add-uom.component';
import { ViewUomComponent } from './view-uom/view-uom.component';
import { AddItemGroupComponent } from './add-item-group/add-item-group.component';
import { ViewItemGroupComponent } from './view-item-group/view-item-group.component';
import { AddItemSubGroupComponent } from './add-item-sub-group/add-item-sub-group.component';
import { ViewItemSubGroupComponent } from './view-item-sub-group/view-item-sub-group.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { ViewBankComponent } from './view-bank/view-bank.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';


@NgModule({
  declarations: [
    AddUomComponent,
    ViewUomComponent,
    AddItemGroupComponent,
    ViewItemGroupComponent,
    AddItemSubGroupComponent,
    ViewItemSubGroupComponent,
    AddVendorComponent,
    ViewVendorComponent,
    AddBankComponent,
    ViewBankComponent,
    AddItemComponent,
    ViewItemComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    IonicModule
  ]
})
export class MasterModule { }
