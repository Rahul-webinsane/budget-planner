import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {


  historyData:any=[
    {id:1,title:'salary',amount:2000, type:'Income'},
    {id:2,title:'Car Loan',amount:5000, type:'Expense'},
    {id:3,title:'Bike Loan',amount:2000, type:'Expense'},
    {id:4,title:'Home Loan',amount:1000, type:'Expense'},
    {id:5,title:'Bonus',amount:20000, type:'Income'},
  ]


  deleteItem(item:any){
    this.historyData.splice(item.id);
  }



}
