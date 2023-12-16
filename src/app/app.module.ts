import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/partials/Home/home/home.component';
import { ServicesComponent } from './components/partials/Home/services/services.component';
import { AboutComponent } from './components/partials/Home/about/about.component';
import { ContactComponent } from './components/partials/Home/contact/contact.component';
import { NotFoundComponent } from './components/Common/not-found/not-found.component';
import { LoginComponent } from './components/Home-Initial/login/login.component';
import { SignUpComponent } from './components/Home-Initial/sign-up/sign-up.component';
import { DashboardComponent } from './components/Home-Initial/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


