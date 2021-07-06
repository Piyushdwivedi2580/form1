import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../user-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  address= "";
  photo:any= [];
  constructor(private userdata:UserServiceService) {
    let data = this.userdata.getfunction();
    console.log(data);
    this.address = data.address;
    this.userdata.getphotourl().subscribe(photo=>{
      this.photo = photo;
    });
   }

  ngOnInit(): void {
  }

}
