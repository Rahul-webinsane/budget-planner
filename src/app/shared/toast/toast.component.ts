import { Component } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';


interface Toast {
  header: string;
  body: string;
  classname: string;
  time: string;
}


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})

export class ToastComponent {

  toasts: Toast[] = [];

  constructor(private toastService: ToasterService) {}

  ngOnInit() {
    this.toastService.toast$.subscribe(toast => this.toasts.push(toast));
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
