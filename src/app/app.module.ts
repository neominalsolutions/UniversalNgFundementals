import {
  Component,
  Directive,
  Injectable,
  NgModule,
  Pipe,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlockButtonComponent } from './components/block-button/block-button.component';
import { SelectorComponent } from './components/selector/selector.component';

// @ile tanımlanmış yapılar bir sınıfın angular tarafında farklı şekilde hizmet vermesini sağlar decorator denir

@NgModule({
  declarations: [
    // uygulama içerisindeki component,directive,pipe buraya tanımlar.
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    BlockButtonComponent,
    SelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Bir module başka bir module altındaki bileşenleri referans aalbilir. Dışarıdan npm i ile yüklenen paketlere ait modulleri tanımlarız.
  ],
  providers: [], // uygulama içerisindeki hizmetlerimiz buraya yazıyoruz
  bootstrap: [AppComponent], // uygulama ilk bu component çalıştır
})
export class AppModule {}
