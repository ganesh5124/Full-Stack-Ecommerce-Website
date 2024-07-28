import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/partials/User/home/home.component';
import { ServicesComponent } from './components/partials/User/services/services.component';
import { AboutComponent } from './components/partials/User/about/about.component';
import { ContactComponent } from './components/partials/User/contact/contact.component';
import { NotFoundComponent } from './components/Common/not-found/not-found.component';
import { LoginComponent } from './components/Home-Initial/login/login.component';
import { SignUpComponent } from './components/Home-Initial/sign-up/sign-up.component';
import { DashboardComponent } from './components/Home-Initial/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './components/Guards/auth.guard';
import { AuthService } from './components/Services/auth.service';
import { HighlightDirective } from './highlight.directive';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

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
    DashboardComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {}
    })
  ],
  providers: [JwtHelperService,AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


