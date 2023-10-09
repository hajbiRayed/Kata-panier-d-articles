import {Injectable} from '@angular/core';
import {of, Observable, from} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Product} from '../model/product.model';
import {dataProdact} from './data'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private products = dataProdact

  getProductList(): Observable<Product[]> {
    return of(this.products);
  }

  getValidProductList(): Observable<Product[]> {
    // @ts-ignore
    return from(this.products).pipe(
      filter(product => product.productName !== ''  && product.price != null && product.category !== '' )
    );
  }
}
