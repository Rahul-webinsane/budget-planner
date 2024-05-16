import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DarkmodeService } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moneymanager';
  isLogged:boolean=false;
  isDarkMode:boolean=false;
  constructor(public auth:AuthService,public darkModeSauthervice: DarkmodeService){
    const retrievedValue:any = localStorage.getItem('userLogged');
    this.isLogged = retrievedValue;
  }
}
