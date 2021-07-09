import { EmployeesModule } from './employees/employees.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersModule } from "./teachers/teachers.module"
import { PupilsModule } from "./pupils/pupils.module";
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,

      TeachersModule,
      PupilsModule,
      EmployeesModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
