import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ToastService } from './services/toast-service/toast.service';

@NgModule({
  declarations: [ToastMessageComponent, ToastContainerComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ToastService],
  exports: [ToastMessageComponent, ToastContainerComponent],
})
export class ToastModule {}
