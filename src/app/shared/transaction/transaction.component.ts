import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['income', Validators.required]
    });
  }


  onSubmit(){
      console.log("form value i -----",this.form.value);
      
  }
}
