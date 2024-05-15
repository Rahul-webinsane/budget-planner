import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  userName:string="Richard";
  ngOnInit(): void {
    const retrievedValue:any = localStorage.getItem('user');
    console.log("ssssss",JSON.parse(retrievedValue)); 
    let userData = JSON.parse(retrievedValue);
    let name = userData?.userName.split('@');
    this.userName = name[0];
  }

}
