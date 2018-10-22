import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { GamesComponent } from './games/games.component';
import { OrderComponent } from './order/order.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { AgmCoreModule } from '@agm/core';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StickyHeaderComponent,
    GamesComponent,
    OrderComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDw_sRy3qeAIqVb-jUJgCqxWEw838dvZo0"
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
