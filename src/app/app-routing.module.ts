import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/partials/Home/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { AboutComponent } from './components/partials/Home/about/about.component';
import { ServicesComponent } from './components/partials/Home/services/services.component';
import { ContactComponent } from './components/partials/Home/contact/contact.component';
import { NotFoundComponent } from './components/Common/not-found/not-found.component';
import { LoginComponent } from './components/Home-Initial/login/login.component';
import { SignUpComponent } from './components/Home-Initial/sign-up/sign-up.component';
import { DashboardComponent } from './components/Home-Initial/dashboard/dashboard.component';
import { AuthGuard } from './components/Guards/auth.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  }, {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'header',
        component:HeaderComponent,
        canActivate:[AuthGuard],
      }
    ]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
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
