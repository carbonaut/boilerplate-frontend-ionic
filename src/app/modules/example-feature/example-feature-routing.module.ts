import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPage } from './pages/about/about.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'about', component: AboutPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleFeatureRoutingModule {
  static components = [HomePage];
}
