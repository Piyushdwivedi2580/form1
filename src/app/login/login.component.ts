import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  age;
  constructor(private data:UserServiceService) {
    let list = this.data.getfunction();
    console.log(list);
    this.age = list.age;
   }

  ngOnInit(): void {
  }

}
