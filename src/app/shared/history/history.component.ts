import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, map, catchError, of, finalize } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ToastComponent } from '../toast/toast.component';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, AfterViewInit{
  
  sortOrder: 'asc' | 'desc' = 'asc';
  historyData:any=[];

  constructor(private apiservice:ApiService,private toastService: ToasterService){}

  ngOnInit(): void {
    this.getAllTransactions().subscribe((data)=>{
      console.log("Get all transaction details ----",data);
      this.historyData = data.transactionDetails;
    })
  }

  ngAfterViewInit(): void {
    
  }


  getAllTransactions(): Observable<any>{
    return this.apiservice.getAllTransactionDetails().pipe(
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


  deleteItem(item:any){
    console.log("Item---",item);
    
    // this.historyData.splice(item.id);
    this.apiservice.deleteTransactionById(item._id).subscribe((data)=>{
      console.log("Delete Record-------",data);
      if(data?.returncode === 0){
        this.toastService.showToast('Success', data.message, 'bg-success text-white');
        this.getAllTransactions().subscribe((data)=>this.historyData = data.transactionDetails)
      }
    })
  }

  toggleStatus:boolean=false;

  toggleSortOrder(sortParam:string) {

    console.log("click");
    
    this.toggleStatus = !this.toggleStatus;
    // this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortOrder = this.toggleStatus ? 'asc' : 'desc';

    // Sort the data based on age property
  this.historyData.sort((a:any, b:any) => {
      if (this.sortOrder === 'asc') {
        return a[sortParam] - b[sortParam]; // Ascending order
      } else {
        return b[sortParam] - a[sortParam]; // Descending order
      }
    });
    
  }


}
