import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products: Product[] = [
    { id: 1, code: 127, libelle: "PC", prixunitaire: 2000, tauxTva: 10 },
    { id: 2, code: 128, libelle: "TV", prixunitaire: 1000, tauxTva: 20 },
    { id: 3, code: 128, libelle: "Table", prixunitaire: 200, tauxTva: 30 },
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getNbProductsByLibelle(libelle: string): number {
    const filteredProducts = this.products.filter(product => product.libelle === libelle);
    return filteredProducts.length;
  }

  
}
