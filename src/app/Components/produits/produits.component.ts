import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../services/produit.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'] // Change styleUrl to styleUrls
})
export class ProduitsComponent implements OnInit {

  produits!: string[];

  ngOnInit(): void {
  }
  constructor(public produit: ProduitService) {}

}
