import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, tap} from "rxjs";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];
  loading: boolean = false;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
   this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe({
          next: (data) => {
            this.products = data;
            console.log(this.products)
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }

  // public addToCard(title: string): void {
  //использование сервиса для обмена данными между компонентами
  // this.cartService.product = title;
  // this.router.navigate(['/order']);

  //использование URL части строки для обмена данными между компонентами
  // this.cartService.product = title;
  // this.router.navigate(['/order', {product: title}]);

  //использование URL (queryParams) для обмена данными между компонентами
  //   this.cartService.product = title;
  //   this.router.navigate(['/order'], {queryParams: {product: title}});
  //
  // }
}
