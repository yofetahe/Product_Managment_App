import { Component, OnInit } from '@angular/core';
import { HttpSentEvent } from '@angular/common/http';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = []

  constructor(
    private _httpService: HttpService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this._httpService.getAllProducts().subscribe(data => {      
      this.products = data;
    })
  }

  getUpdateForm(id: string){
    this._router.navigate([`/products/edit/${id}`]);
  }

  deleteProduct(id: string){
    this._httpService.deleteProduct(id)
      .subscribe(data => {
        this.getAllProducts();
      })
  }
}
