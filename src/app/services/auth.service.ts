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
    const isLogged:any = localStorage.getItem('userLogged');
    this.isLoggedIn = isLogged;
  }

  login(userDetails:any,loginDetails:any): void {

    const targetName = loginDetails.userName;
    const password = loginDetails.password;
    const userDatas = userDetails;
    const userObject = userDatas.filter((user:any) => user.userName === targetName)[0];
    if (targetName === userObject?.userName && password === userObject?.password) {
      localStorage.setItem(this.userDatas, JSON.stringify(userObject));
      localStorage.setItem(this.userLogged, JSON.stringify(true));
      this.isLoggedIn = true;
    }
    if(this.isLoggedIn){
      this.routes.navigate(['/home'])
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.clear();
    this.routes.navigate(['login'])
  }

  getUserDetails(param:any){
    this.http.get<any[]>('assets/data/user-login.json').subscribe(data => {
      this.userDetails = data;
      this.login(data,param);
    });
  }

}
