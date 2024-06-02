import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    RouterOutlet,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    HttpClient,
    UserService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
