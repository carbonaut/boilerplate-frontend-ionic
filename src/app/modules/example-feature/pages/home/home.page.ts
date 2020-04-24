import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from '../../../../shared/components/modal-example/modal-example.component';
import { ToastService } from '../../../../core/toasts/services/toast-service/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalController: ModalController, private toastService: ToastService) {}

  async openModal(longText = false) {
    const modal = await this.modalController.create({
      component: ModalExampleComponent,
      mode: 'md',
      cssClass: 'c-ion-modal',
      componentProps: {
        longText,
      },
    });

    return modal.present();
  }

  async triggetToast(type: string) {
    switch (type) {
      case 'success':
        this.toastService.success('Testing Success');
        break;
      case 'error':
        this.toastService.error('Testing Error');
        break;
      case 'warning':
        this.toastService.warning('Testing Warning');
        break;
      default:
        this.toastService.info('Testing Info');
        break;
    }
  }
}
