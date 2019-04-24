import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilecomComponent } from './mobilecom/mobilecom.component';
import { MobileservService } from './mobileserv.service';
import { HttpClientModule } from  '@angular/common/http';
import { OrderPipe } from './mobilecom/orderby';

@NgModule({
  declarations: [
    AppComponent,
    MobilecomComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [MobileservService], //In this provider MobileservService got registered.
  bootstrap: [AppComponent]
})
export class AppModule { }
