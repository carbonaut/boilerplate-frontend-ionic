import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { toastConfig } from "./toast.config";
import { TranslationsService } from "../translations-service/translations.service";

interface ToastExtraConfig {
  header?: string;
}

@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async success(message: string, extraConfig: ToastExtraConfig = {}) {
    const toast = await this.toastController.create({
      header: extraConfig.header || "",
      message,
      color: "success",
      ...toastConfig,
      ...extraConfig,
    });
    toast.present();
  }

  async error(message: string, extraConfig: ToastExtraConfig = {}) {
    const toast = await this.toastController.create({
      header: extraConfig.header || "",
      message,
      color: "danger",
      ...toastConfig,
      ...extraConfig,
    });
    toast.present();
  }

  async warning(message: string, extraConfig: ToastExtraConfig = {}) {
    const toast = await this.toastController.create({
      header: extraConfig.header || "",
      message,
      color: "warning",
      ...toastConfig,
      ...extraConfig,
    });
    toast.present();
  }
}
