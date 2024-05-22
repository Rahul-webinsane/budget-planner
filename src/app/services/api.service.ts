import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../const-datas/url.contant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getUserDetails():Observable<any>{
    return this.http.get<any>(URLS.userList);
  }

  addTransaction(payload:any):Observable<any>{
    return this.http.post<any>(URLS.addTransaction,payload)
  }

  getAllTransactionDetails():Observable<any>{
    return this.http.get<any>(URLS.addTransaction)
  }

  deleteTransactionById(id:any):Observable<any>{
    return this.http.delete<any>(URLS.deleteTransactions + '/'+ id)
  }
}
