import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendingProductCardComponent } from './trending-product-card/trending-product-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent,
    TrendingComponent,
    TrendingProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
