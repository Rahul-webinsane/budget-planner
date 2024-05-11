import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-cards',
  templateUrl: './money-cards.component.html',
  styleUrls: ['./money-cards.component.css']
})
export class MoneyCardsComponent implements OnInit,AfterViewInit{

  @Input('svgIcon')
  svgIcon!: string;
  @Input('headingOne') 
  headingOne!: any;
  @Input('amount') 
  amount!: any;
  @Input('svgArray') 
  svgArray!:any;


  ngOnInit(): void {
    console.log("on changes----",this.svgIcon);
  }
  ngAfterViewInit(): void {
    console.log("on After view----",this.svgIcon);
  }
}
