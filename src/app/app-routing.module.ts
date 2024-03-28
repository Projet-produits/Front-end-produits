import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./Components/produits/produits.component";
import {AddProduitComponent} from "./Components/add-produit/add-produit.component";

export const routes: Routes = [
  {path:"produits", component : ProduitsComponent},
  {path:"addproduits", component : AddProduitComponent},
  {path:"", redirectTo:"produits", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
