import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean = false;
  userDetails:any=[];
  userName:string="Richard";
  userDatas:any = "user";
  userLogged:any="userLogged";


  constructor(private http:HttpClient,private routes:Router) { 
      
  }

  login(userDetails:any,loginDetails:any): void {

    console.log("get user",this.userDetails);
    // Perform authentication logic here, e.g., check if username and password are valid
    const targetName = loginDetails.userName;
    const password = loginDetails.password;
    const userDatas = userDetails;
    const userObject = userDatas.filter((user:any) => user.userName === targetName)[0];
    console.log("obbbbbbb",userObject); 
    if (targetName === userObject?.userName && password === userObject?.password) {
      localStorage.setItem(this.userDatas, JSON.stringify(userObject));
      localStorage.setItem(this.userLogged, JSON.stringify(true));
      this.isLoggedIn = true;
    }

    console.log("vvvvvvvvv",this.isLoggedIn);
    

    if(this.isLoggedIn){
      this.routes.navigate(['/home'])
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getUserDetails(param:any){
    this.http.get<any[]>('assets/data/user-login.json').subscribe(data => {
      this.userDetails = data;
      console.log("login array----",data);
      this.login(data,param);
    });
  }

}
