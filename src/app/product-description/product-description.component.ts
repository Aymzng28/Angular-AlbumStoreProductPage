import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe (response =>
      this.albumInfo = response);
  }

}
