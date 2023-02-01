import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from './api/api.module';

import { AppComponent } from './app.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: 'https://shipments-test.com'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
