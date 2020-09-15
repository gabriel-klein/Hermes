import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@hermes/shared/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [NavbarComponent, SidenavComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
  exports: [CommonModule, FlexLayoutModule, MaterialModule, NavbarComponent, SidenavComponent],
})
export class SharedModule {}
