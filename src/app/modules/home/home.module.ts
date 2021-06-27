import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MainBannerComponent } from './home/main-banner/main-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
