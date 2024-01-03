import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../Home-Initial/dashboard/dashboard.component';

const routes:Routes =[
  {path:'',component:DashboardComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class HeaderRoutingModule { }
