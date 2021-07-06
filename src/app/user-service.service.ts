import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getUrl(){
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }
  getfunction(){
    return{
      age:23,
      name:'piyush',
      address:'gurgaon'
    }
  }
  getphotourl(){
    let url = "https://jsonplaceholder.typicode.com/photos";
    return this.http.get(url);
  }
}
