import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CoreModule } from '@hermes/core';
import { SharedModule } from '@hermes/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RegrasComponent } from './regras/regras.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, SharedModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
