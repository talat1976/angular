import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeachersComponent } from "./teachers.component";
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

@NgModule({
   declarations: [
      TeachersComponent,
      EditTeacherComponent,
   ],
   imports: [
      CommonModule,
      FormsModule
   ]
})
export class TeachersModule { }
