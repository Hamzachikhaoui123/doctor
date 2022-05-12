import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMedComponent } from './components/list-med/list-med.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMedicamentComponent } from './components/add-medicament/add-medicament.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FilterPipe } from './filter.pipe';
import { OrdonnanceComponent } from './components/ordonnance/ordonnance.component';
import { NavbarComponent } from './components/sahred/navbar/navbar/navbar.component';
import { SidebarComponent } from './components/sahred/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMedComponent,
    AddMedicamentComponent,
    FilterPipe,
    OrdonnanceComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
