import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from '../../../../shared/components/modal-example/modal-example.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalController: ModalController) {}

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
}
