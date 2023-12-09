import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/partials/Home/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { AboutComponent } from './components/partials/Home/about/about.component';
import { ServicesComponent } from './components/partials/Home/services/services.component';
import { ContactComponent } from './components/partials/Home/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent, redirectTo: '/header', pathMatch: 'full'
  },
  {
    path:'/header', 
    component:HeaderComponent
  },
  { path: '/home',
    component: HomeComponent 
  },
  { path: '/about', 
    component: AboutComponent 
  },
  { path: '/services', 
    component: ServicesComponent 
  },
  { path: '/contact', 
  component: ContactComponent 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
