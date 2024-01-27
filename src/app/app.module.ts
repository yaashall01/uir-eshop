import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FooterComponent } from './home-base/footer/footer.component';
import { HomeComponent } from './home-base/home/home.component';
import { MenuComponent } from './home-base/menu/menu.component';
import { MenuitemComponent } from './home-base/menu/menuitem/menuitem.component';
import { SidebarComponent } from './home-base/sidebar/sidebar.component';
import { TopbarComponent } from './home-base/topbar/topbar.component';
// import { HomeModule } from './home-base/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    MenuComponent,
    MenuitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeModule
    AppLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
