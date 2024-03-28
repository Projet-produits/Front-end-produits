import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { ProduitsComponent } from './Components/produits/produits.component';
import { AddProduitComponent } from './Components/add-produit/add-produit.component';
import { ListeProduitsComponent } from './Components/liste-produits/liste-produits.component';
import {HeaderComponent} from "./Components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    ListeProduitsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
