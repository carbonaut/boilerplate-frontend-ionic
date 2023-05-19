import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../../services/toast-service/toast.service';
import { ToastMessage } from '../../services/toast-service/toast-service.interface';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent implements OnInit {
  visibleToasts$: BehaviorSubject<ToastMessage[]>;

  constructor(private toastService: ToastService) {
    this.visibleToasts$ = this.toastService.visibleToasts$;
  }

  ngOnInit() {}

  trackById(index: number, item: ToastMessage) {
    return item.key;
  }

  closeToast(toast: ToastMessage) {
    this.toastService.handleButtonClick(toast);
  }
}
