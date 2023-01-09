import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { ProductoComponent } from './producto/producto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'shop', component: CartaComponent },
  { path: 'shop/:id',component: ProductoComponent },
  { path: 'Dashboard',component: DashboardComponent },
  { path: 'Contact',component: ContactComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
