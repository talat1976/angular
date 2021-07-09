import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PupilsComponent } from './pupils/pupils.component';
import { EditTeacherComponent } from './teachers/edit-teacher/edit-teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPupilsComponent } from 'src/app/pupils/edit-pupils/edit-pupils.component';

const routes: Routes = [
   { path: "", component: HomeComponent },
   {
      path: "teachers",
      children: [
         { path: "", component: TeachersComponent },
         { path: "edit/:id", component: EditTeacherComponent },
      ]
   },
   {
      path: "pupils",
      children: [
         { path: "", component: PupilsComponent },
         { path: "edit/:id", component: EditPupilsComponent },
      ]
   },
   {
      path: "employees",
      component: EmployeesComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
