import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product_id: string;

  product: any = {
    id: '',
    title: '',
    price: '',
    image: '',
    description: ''
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.product_id = params['id'];
    });
    this.getProductById(this.product_id);
  }

  getProductById(id: any){
    this._httpService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }

  updateProductInfo(){    
    this._httpService.updateProduct(this.product_id, this.product)
      .subscribe(data => {
        this._router.navigate(['/products']);
      });
  }
}
