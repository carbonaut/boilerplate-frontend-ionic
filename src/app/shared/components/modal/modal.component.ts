import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() hasClose = true;

  constructor(public modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
