import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { NgClass, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: '[app-product-box]',
  templateUrl: './product-box.component.html',
  standalone: true,
  imports: [
    MatCard,
    NgClass,
    MatIcon,
    TitleCasePipe,
    CurrencyPipe,
  ],
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();

  constructor() { }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
