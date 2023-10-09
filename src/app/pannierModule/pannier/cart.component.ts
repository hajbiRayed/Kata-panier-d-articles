import {Component, OnInit} from '@angular/core';
import {CartItemsService} from '../../coreModule/cart-item-service/cart-items.service';
import {CartItem} from '../../coreModule/model/cartItem.model';
import {TaxService} from '../../coreModule/tax-service/tax.service';
import { MessageService } from '../../coreModule/messages-service/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  unite : string = "€"
  constructor(private cartItemsService: CartItemsService,
              public taxService: TaxService , private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartItemsService.getCartItems();
  }

  removeFromCart(item: CartItem): void {
    this.cartItemsService.removeFromCart(item);
    this.messageService.add(item.product.productName + 'is Deleted ' );

    this.cartItems = this.cartItemsService.getCartItems();
  }
}
