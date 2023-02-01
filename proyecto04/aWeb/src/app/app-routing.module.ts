import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbComponent } from './db/db.component';
import { NorelacionalComponent } from './norelacional/norelacional.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'customers', component: DbComponent },
  { path: 'customers/:customerNumber',component: NorelacionalComponent },
  { path: 'customers/:customerNumber/customers/:customerNumber/:productCode',component: ProductComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
