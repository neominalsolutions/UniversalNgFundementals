import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniModule } from './components/uni.module';
import { LayoutModule } from './layout/layout.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminRolePageComponent } from './pages/admin-role-page/admin-role-page.component';
import { AdminUserPageComponent } from './pages/admin-user-page/admin-user-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
// @ile tanımlanmış yapılar bir sınıfın angular tarafında farklı şekilde hizmet vermesini sağlar decorator denir
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    // uygulama içerisindeki component,directive,pipe buraya tanımlar.
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    AdminHomePageComponent,
    AdminUserPageComponent,
    AdminRolePageComponent,
    UserCardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Bir module başka bir module altındaki bileşenleri referans aalbilir. Dışarıdan npm i ile yüklenen paketlere ait modulleri tanımlarız.
    ButtonModule,
    UniModule,
    LayoutModule,
    TableModule,
  ],
  providers: [], // uygulama içerisindeki hizmetlerimiz buraya yazıyoruz
  bootstrap: [AppComponent], // uygulama ilk bu component çalıştır
})
export class AppModule {}
