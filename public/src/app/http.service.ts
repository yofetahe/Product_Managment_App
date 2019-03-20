import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get('/api/products');
  }

  getProductById(id: string){
    return this._http.get(`/api/products/${id}`);
  }

  addProduct(data: any){
    console.log(data);
    return this._http.post('/api/products', data);
  }

  updateProduct(id: string, data: any){
    return this._http.put(`/api/products/${id}`, data);
  }

  deleteProduct(id: string){
    return this._http.delete(`/api/products/${id}`);
  }
}
 