import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuitemComponent } from '../menu/menuitem/menuitem.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { AppConfigModule } from 'src/app/layout/config/config.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [  
    HomeComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    MenuComponent,
    MenuitemComponent

   ],
  imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule
  
  ]
})
export class HomeModule { }
