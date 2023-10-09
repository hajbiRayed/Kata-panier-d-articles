import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import {AppComponent} from './app.component';
import {CoreModule} from './coreModule/core.module';
import {ProductModule} from './productModule/product.module';
import {CartModule} from './pannierModule/cart.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { MessageService } from './coreModule/messages-service/message.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    ProductModule,
    CartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
   
    MessageService,

],
  bootstrap: [AppComponent]
})
export class AppModule {
}
