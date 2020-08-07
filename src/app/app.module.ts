import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSoapModule } from 'ngx-soap';

import { AppComponent } from './app.component';
import { SoapClientComponent } from './soap-client/soap-client.component';

@NgModule({
  declarations: [
    AppComponent,
    SoapClientComponent
  ],
  imports: [
    BrowserModule,
    NgxSoapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
