import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder,private apiservice:ApiService,private toastService:ToasterService) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['income', Validators.required]
    });
  }


  onSubmit(){
      console.log("form value i -----",this.form.value);
      if(this.form.valid){
        const param = this.form.value;
        param.auth = true;
        this.apiservice.addTransaction(param).subscribe((data)=>{
          console.log("Dataaaaa-------",data);
          this.toastService.showToast('Success', data.message, 'bg-success text-white');
        }
      )
      }else{
        alert('please ad mandatory fields');
      }
      
  }

  reset(){
    this.form.reset();
  }
}
