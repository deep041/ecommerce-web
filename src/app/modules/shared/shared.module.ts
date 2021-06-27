import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, ButtonComponent, FooterComponent]
})
export class SharedModule { }
