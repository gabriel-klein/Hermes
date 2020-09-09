import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@hermes/shared/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule, MaterialModule],
})
export class SharedModule {}
