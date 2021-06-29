import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { TrendingComponent } from './trending/trending.component';
import { SharedModule as ShareModule } from './shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShareModule
  ]
})
export class HomeModule { }
