import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: any = {
    title: '',
    price: '',
    image: ''
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addProductInfo(){   
    this._httpService.addProduct(this.product).subscribe(data => {
      this._router.navigate(['/products']);
    })
  }

}
