import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

interface Toast {
  header: string;
  body: string;
  classname: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private toastSubject = new Subject<Toast>();
  toast$ = this.toastSubject.asObservable();

  showToast(header: string, body: string, classname: string = '', delay: number = 5000) {
    const time = new Date().toLocaleTimeString();
    const toast: Toast = { header, body, classname, time };
    this.toastSubject.next(toast);
    setTimeout(() => this.removeToast(toast), delay);
  }

  private removeToast(toast: Toast) {
    // Implement logic to remove toast if necessary
    // This might involve tracking toasts and adding a 'remove' event to the observable
  }
}
