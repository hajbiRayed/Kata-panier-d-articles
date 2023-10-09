import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';
import {CartItem} from '../model/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor() {
  }

  getPriceWithTax(product: Product): string {
    let taxRate = this.getTaxRate(product);
    if (product.isImported) {
      taxRate += 5;
    }
    let priceWithTax = product.price ? product.price * (1+ taxRate / 100) : 0;
    
    priceWithTax  = this.roundToNearest5Cents(priceWithTax);
    return priceWithTax.toFixed(2);
  }

  getTaxRate(product: Product): number {
    if (product.category === 'Nourriture' || (product.category === 'Médicaments' && product.isImported === false)) {
      return 0;
    } else if (product.category === 'Livres') {
      return 10;
    } else {
      return 20;
    }
  }

  getTax(cartItem: CartItem): number {
    // @ts-ignore
    return (cartItem.priceWithTax - cartItem.product.price).toFixed(2);
  }


  getTotalTax(cartItems: CartItem[]) {
    let total = 0;
    cartItems.forEach(cartItem => {
      total += Number(this.getTax(cartItem));
    });
    return total;
  }


  getTotalTTC(cartItems: CartItem[]) {
    let total = 0;
    cartItems.forEach((el:any) => {

      total += el.priceWithTax;
    });
    return total;
  }

  
  private roundToNearest5Cents(price: number): number {
    return Math.ceil(price / 0.05) * 0.05;
  }
}
