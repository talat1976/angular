import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PUPILS } from 'src/app/pupils/models/dummy-data-pupils';
import { Pupil } from 'src/app/pupils/models/pupil';



@Injectable({
   providedIn: 'root'
})
export class PupilsService {

   constructor() { }

   getPupils(): Observable<Pupil[]> {
      return of(PUPILS)
   }

   getPupilById(id: string): Observable<Pupil> {
      const pupil = PUPILS.find(p => p.id === id)

      if (pupil) {
         return of(pupil)
      }

      return of(new Pupil("", "", 0, "", "", {}, undefined))
   }
}
