import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/partials/User/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { AboutComponent } from './components/partials/User/about/about.component';
import { ServicesComponent } from './components/partials/User/services/services.component';
import { ContactComponent } from './components/partials/User/contact/contact.component';
import { NotFoundComponent } from './components/Common/not-found/not-found.component';
import { LoginComponent } from './components/Home-Initial/login/login.component';
import { SignUpComponent } from './components/Home-Initial/sign-up/sign-up.component';
import { AuthGuard } from './components/Guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  }, 
  {
    path:'header',
    component:HeaderComponent ,
    canActivate:[AuthGuard],
},
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }, 
  {
    path: '**',
    component: NotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
