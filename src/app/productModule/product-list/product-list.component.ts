import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../coreModule/api-service/api.service";
import {Product} from "../../coreModule/model/product.model";
import {CartItemsService} from "../../coreModule/cart-item-service/cart-items.service";
import {CartItem} from "../../coreModule/model/cartItem.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  categories: (string | undefined)[] = [];
  selectedCategory = '';
  filteredList: Product[] = [];
  cartItems: CartItem[] = [];

  constructor(private apiService: ApiService,
              private cartItemsService: CartItemsService) {
  }

  ngOnInit(): void {
    this.apiService.getProductList().subscribe(products => {
      this.categories = Array.from(new Set(products.map(item => item.category)));
      this.productList = products.filter(product => product.productName !== '');
      this.filteredList = this.productList;
    });
    this.cartItems = this.cartItemsService.getCartItems();
    this.cartItemsService.getValue().subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }

  onChangeCategoryFilter() {
    this.filteredList = this.productList.filter(product => product.category === this.selectedCategory || this.selectedCategory === '');
  }
}
