import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { NavbarComponent, SidenavComponent } from './components';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [NavbarComponent, SidenavComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
  exports: [CommonModule, FlexLayoutModule, MaterialModule, NavbarComponent, SidenavComponent],
})
export class SharedModule {}
