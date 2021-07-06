import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appapi';
  name = "";
  datalist:any = [];
  constructor(private user:UserServiceService){
    console.warn(this.user.getfunction());
    let data =  this.user.getfunction();
    this.name = data.name;
    this.user.getUrl().subscribe(apidata=>{
      console.log(apidata);
      this.datalist = apidata;
    });
    
  }
}
