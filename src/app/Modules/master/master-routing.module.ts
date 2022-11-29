import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'add-uom', component: AddUomComponent },
  { path: 'view-uom', component: ViewUomComponent },
  { path: 'add-item-group', component: AddItemGroupComponent },
  { path: 'view-item-group', component: ViewItemGroupComponent },
  { path: 'add-item-sub-group', component: AddItemSubGroupComponent },
  { path: 'view-item-sub-group', component: ViewItemSubGroupComponent },
  { path: 'add-vendor', component: AddVendorComponent },
  { path: 'view-vendor', component: ViewVendorComponent },
  { path: 'add-bank', component: AddBankComponent },
  { path: 'view-bank', component: ViewBankComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'view-item', component: ViewItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
