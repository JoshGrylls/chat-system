import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { SuperMenuComponent } from './super/super-menu/super-menu.component';
import { GroupMenuComponent } from './group/group-menu/group-menu.component';
import { UserMenuComponent } from './normal/user-menu/user-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AccountComponent,
    RegisterComponent,
    ChatroomComponent,
    SuperMenuComponent,
    GroupMenuComponent,
    UserMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
