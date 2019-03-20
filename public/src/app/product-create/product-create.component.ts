import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FORMERR } from 'dns';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: any = {
    title: '',
    price: '',
    image: '',
    description: ''
  }

  formError: any = {
    title: '',
    price: ''
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addProductInfo(){    
    this._httpService.addProduct(this.product).subscribe(data => {
      if(data['errors']){
        this.formError.title = data['errors']['title']['message'];
        this.formError.price = data['errors']['price']['message'];        
      } else {     
        this._router.navigate(['/products']);
      }
    })
  }

}
