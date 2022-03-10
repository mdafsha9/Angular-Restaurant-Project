import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url:any ="http://localhost:4000/restaurants";
  constructor(private http : HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }

  saveResto(data:any){
    return this.http.post(this.url.data);
  }
}
