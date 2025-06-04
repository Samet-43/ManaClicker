import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';

export const routes: Routes = [
  {
    path: 'main-page',
    component: MainPage
  },
  {
    path: "**", redirectTo: 'main-page'
  }
];
