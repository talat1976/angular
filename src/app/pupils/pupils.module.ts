import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PupilsComponent } from './pupils.component';
import { EditPupilsComponent } from './edit-pupils/edit-pupils.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      PupilsComponent,
      EditPupilsComponent
   ],
   imports: [
      CommonModule,
      FormsModule
   ]
})
export class PupilsModule { }
