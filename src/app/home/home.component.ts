import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  moneyCardDetails: any[] = [];

    constructor(private http: HttpClient,public auth: AuthService) {}

    ngOnInit() {
        this.http.get<any[]>('assets/data/money-card.json').subscribe(data => {
            this.moneyCardDetails = data;
            console.log("get dataaa----",data);
        });
    }
}
