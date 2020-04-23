import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';
import { toastConfig } from './toast.config';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async success(message: string, extraConfig: ToastOptions = {}) {
    const toast = await this.toastController.create({
      message,
      color: 'success',
      ...toastConfig,
      ...extraConfig,
    });
    toast.present();
  }

  async error(message: string, extraConfig: ToastOptions = {}) {
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      ...toastConfig,
      ...extraConfig,
    });
    toast.present();
  }

  async warning(message: string, extraConfig: ToastOptions = {}) {
    const toast = await this.toastController.create({
      message,
      color: 'warning',
      ...toastConfig,
      ...extraConfig,
    });
    toast.present();
  }
}
