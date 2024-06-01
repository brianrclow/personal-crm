import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserDetailComponent } from './user/user-detail.component'
import { UsersComponent } from './user/users.component'
import { UserService } from './user.service'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, UsersComponent, UserDetailComponent],
  providers: [HttpClient, UserService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
