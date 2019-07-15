import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthComponent, DashboardComponent } from './components';
import { SecureImagePipe } from './pipes';

import { AlertComponent } from './directives';
import { ErrorInterceptor, AuthInterceptor } from './helpers';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    AlertComponent,
    SecureImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
