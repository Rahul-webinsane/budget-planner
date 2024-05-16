import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  darkMode: boolean = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }


  getDark(){
    const darkMode:any = localStorage.getItem('darkMode');
    return darkMode;
 }

}
  
