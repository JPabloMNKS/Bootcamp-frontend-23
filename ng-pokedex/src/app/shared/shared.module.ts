import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchBarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, SearchBarComponent],
})
export class SharedModule {}
