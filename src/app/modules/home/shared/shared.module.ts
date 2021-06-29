import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as ShareModule } from '../../shared/shared.module';
import { TrendingProductCardComponent } from './trending-product-card/trending-product-card.component';
import { BigProductCardComponent } from './big-product-card/big-product-card.component';
import { SmallProductCardComponent } from './small-product-card/small-product-card.component';

@NgModule({
    declarations: [TrendingProductCardComponent, BigProductCardComponent, SmallProductCardComponent],
    imports: [
        CommonModule,
        ShareModule
    ],
    exports: [TrendingProductCardComponent, BigProductCardComponent, SmallProductCardComponent]
})
export class SharedModule { }
