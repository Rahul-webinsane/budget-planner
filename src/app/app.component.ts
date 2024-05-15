import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moneymanager';
  isLogged:boolean=false;
  
  constructor(public auth:AuthService){
    const retrievedValue:any = localStorage.getItem('userLogged');
    console.log("user logged",retrievedValue);
    
   this.isLogged = retrievedValue;
  }
}
