import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalExampleComponent } from '../../../../shared/components/modal-example/modal-example.component';
import { ToastService } from '../../../../core/toasts/services/toast-service/toast.service';
import { FieldRadioOption } from '../../../../shared/components/field-radio/field-radio.interface';
import { FieldSelectOption } from '../../../../shared/components/field-select/field-select.interface';
import { ExampleRepository } from '../../state/examples.repository';
import { ExamplesService } from '../../state/examples.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: UntypedFormGroup;

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
    private formBuilder: UntypedFormBuilder,
    private examplesRepository: ExampleRepository,
    private exampleService: ExamplesService
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

    // Just an example for elf repository usage
    this.exampleService.loadExamples().subscribe();

    // You can also bound this observable to a variable
    // and use it with an async pipe on template
    this.examplesRepository.examples$.subscribe((examples) => {
      console.log(examples);
    });
  }

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

  submit() {
    // eslint-disable-next-line no-console
    console.log(this.form.value);
  }
}
