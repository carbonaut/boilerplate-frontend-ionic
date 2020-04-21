import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedExampleComponent } from './components/shared-example/shared-example.component';

@NgModule({
  declarations: [SharedExampleComponent],
  imports: [CommonModule],
  exports: [SharedExampleComponent],
})
export class SharedModule {}
