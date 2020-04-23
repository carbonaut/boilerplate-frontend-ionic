import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedExampleComponent } from './components/shared-example/shared-example.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [SharedExampleComponent, ButtonComponent],
  imports: [CommonModule, IonicModule.forRoot(), TranslateModule.forChild({})],
  exports: [TranslateModule, SharedExampleComponent, ButtonComponent],
})
export class SharedModule {}
