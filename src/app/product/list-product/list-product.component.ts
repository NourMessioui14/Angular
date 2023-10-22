import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Core/Services/product.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
})
export class ListProductComponent implements OnInit{
  ListProduct: Product[] = [];
  resultCount: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.ListProduct = this.productService.getAllProducts();
  }

  calculateProductsByLibelle(libelle: string): void {
    this.resultCount = this.productService.getNbProductsByLibelle(libelle);
  }

}
