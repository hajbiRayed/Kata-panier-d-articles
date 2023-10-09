import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CartItem} from "../model/cartItem.model";


@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  private cartItemsSubject = new Subject<CartItem[]>();
  cartItems: CartItem[] = []

  constructor() {
    this.cartItemsSubject.next([]);
  }

  emitValue(value: CartItem[]) {
    this.cartItems = value;
    this.cartItemsSubject.next(value);
  }

  getValue(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(i => i.product.id === item.product.id);
  
    if (existingItem) {
      if (existingItem.quantity !== undefined) {
        existingItem.quantity += item.quantity;
      }
    } else {
      this.cartItems.push(item);
    }
  
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.cartItemsSubject.next(this.cartItems);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}
