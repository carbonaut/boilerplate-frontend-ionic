import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedExampleComponent } from './components/shared-example/shared-example.component';

@NgModule({
  declarations: [SharedExampleComponent],
  imports: [CommonModule, TranslateModule.forChild({})],
  exports: [SharedExampleComponent, TranslateModule],
})
export class SharedModule {}
