import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomePage } from './pages/home/home.page';
import { ExampleFeatureRoutingModule } from './example-feature-routing.module';
import { PresentationComponent } from './components/presentation/presentation.component';
import { StoreExampleComponent } from './components/store-example/store-example.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExampleFeatureRoutingModule,
  ],
  declarations: [HomePage, PresentationComponent, StoreExampleComponent],
})
export class HomePageModule {}
