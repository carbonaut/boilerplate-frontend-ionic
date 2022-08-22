import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalExampleComponent } from '../../../../shared/components/modal-example/modal-example.component';
import { ToastService } from '../../../../core/toasts/services/toast-service/toast.service';
import { FieldRadioOption } from '../../../../shared/components/field-radio/field-radio.interface';
import { FieldSelectOption } from '../../../../shared/components/field-select/field-select.interface';
import { ExamplesQuery } from '../../state/examples.query';
import { ExamplesService } from '../../state/examples.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  form: FormGroup;

  isModalOpen: boolean;

  isStoreExampleOpened: boolean = false;

  radioOptions: FieldRadioOption[] = [
    {
      label: 'Male',
      value: 'M',
      icon: 'male',
    },
    {
      label: 'Female',
      value: 'F',
      icon: 'female',
    },
  ];

  selectOptions: FieldSelectOption[] = [
    {
      label: 'Male',
      value: 'M',
    },
    {
      label: 'Female',
      value: 'F',
    },
  ];

  constructor(
    private modalController: ModalController,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private exampleService: ExamplesService,
    private examplesQuery: ExamplesQuery
  ) {
    this.form = this.formBuilder.group({
      checkbox: [true, Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      text: [{ value: 'test', disabled: true }, Validators.required],
      scan: ['test', Validators.required],
      otp: ['', Validators.required],
      radio1: ['', Validators.required],
      radio2: ['', Validators.required],
      password: ['', Validators.required],
      select: ['', Validators.required],
      file: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.exampleService.loadExamples().subscribe();
  }

  toggleStoreExample() {
    this.isStoreExampleOpened = !this.isStoreExampleOpened;
  }

  async openModal(longText = false) {
    this.examplesQuery.turnOnOpen();

    const modal = await this.modalController.create({
      component: ModalExampleComponent,
      mode: 'md',
      cssClass: 'c-ion-modal',
      componentProps: {
        longText,
      },
    });

    modal.onDidDismiss().then(() => {
      this.examplesQuery.turnOffOpen();
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

  submit() {
    // eslint-disable-next-line no-console
    console.log(this.form.value);
  }
}
