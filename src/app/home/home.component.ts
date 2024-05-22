import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, finalize, map, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  moneyCardDetails: any[] = [];

    constructor(private http: HttpClient,public auth: AuthService,public apiservice: ApiService) {}

    ngOnInit() {
        this.http.get<any[]>('assets/data/money-card.json').subscribe(data => {
            this.moneyCardDetails = data;
            console.log("get dataaa----",data);
        });

        this.getUserList({}).subscribe((data)=>{
          console.log("get details-------",data);
        })
    }


    getUserList(search:{}) : Observable<any>{

      return this.apiservice.getUserDetails().pipe(
        map((data)=>{
          return data
        }),
        catchError((err)=>{
          return of({});
        }),
        finalize(()=>{

        })
      )
    }
}


