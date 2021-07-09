import { Teacher } from './models/teacher';
import { Injectable } from '@angular/core';
import { TEACHERS } from 'src/app/teachers/models/dummy-data-teachers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() {}

   getTeachers(): Observable<Teacher[]> {
      return of(TEACHERS)
   }

   getTeacherById(id: string): Observable<Teacher> {
      const teacher = TEACHERS.find(t => t.id === id)

      if(teacher) {
         return of(teacher)
      }

      return of(new Teacher("", "", 0, "", "", 0, 0, 0, [], []))
   }
}
