import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { toastConfig } from './toast.config';
import { TranslationsService } from '../translations-service/translations.service';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController,
              private translationService: TranslationsService) { }

  async success(message: string, extraConfig: {} = {}) {
    const toast = await this.toastController.create({
      header: this.translationService.getInstantTranslation('TOAST_MESSAGES.SUCCESS'),
      message,
      color: 'success',
      ... toastConfig,
      ... extraConfig
    });
    toast.present();
  }

  async error(message: string, extraConfig: {} = {}) {
    const toast = await this.toastController.create({
      header: this.translationService.getInstantTranslation('TOAST_MESSAGES.ERROR'),
      message,
      color: 'danger',
      ... toastConfig,
      ... extraConfig
    });
    toast.present();
  }

  async warning(message: string, extraConfig: {} = {}) {
    const toast = await this.toastController.create({
      header: this.translationService.getInstantTranslation('TOAST_MESSAGES.WARNING'),
      message,
      color: 'warning',
      ... toastConfig,
      ... extraConfig
    });
    toast.present();
  }
}
