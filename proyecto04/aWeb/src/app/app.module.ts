import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NorelacionalComponent } from './norelacional/norelacional.component';
import { HttpClientModule } from '@angular/common/http';
import { DbComponent } from './db/db.component';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';  
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    NorelacionalComponent,
    DbComponent,
    NavComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
