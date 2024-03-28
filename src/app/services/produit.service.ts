import {Injectable} from "@angular/core";
import {Produit} from "../models/Produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor() { }
  id: number = 1;
  produitList: Produit[] = [
    {
      id: this.id++,
      nom: "PC Asus",
      prix: 299.99,
      dateCreation:"20/03/2024"
    },
    {
      id: this.id++,
      nom: "Imprimante Epson",
      prix: 49.99,
      dateCreation:"20/03/2024"
    },
    {
      id: this.id++,
      nom: "Tablette Samsung",
      prix: 299.99,
      dateCreation:"20/03/2024"
    },

  ]
  listeProduit: Produit[] = this.produitList;

}
