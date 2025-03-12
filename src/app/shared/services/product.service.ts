import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductType[] = [];

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiURL + '/pizzas')
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiURL + `/pizzas?id=${id}`)
  }

  createOrder(data: { product: string, address: string, phone: string}){
    return this.http.post<{success: boolean, message?: string }>(environment.apiURL + '/order-pizza', data);
  }
}
