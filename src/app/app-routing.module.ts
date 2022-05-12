import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMedComponent } from './components/list-med/list-med.component';
import { OrdonnanceComponent } from './components/ordonnance/ordonnance.component';
import { NavbarComponent } from './components/sahred/navbar/navbar/navbar.component';
import { SidebarComponent } from './components/sahred/sidebar/sidebar.component';

const routes: Routes = [
  
  {
    path:"ListMedicament",
    component:ListMedComponent
  },
  {
    path:"ordonnance",
    component:OrdonnanceComponent
  },
  {
    path:"saherd",
    children:[
      {
        path:"navbar",
        component:NavbarComponent
      },
      {
        path:"sidebar",
        component:SidebarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
