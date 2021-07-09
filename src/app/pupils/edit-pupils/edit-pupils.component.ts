import { Pupil } from 'src/app/pupils/models/pupil';
import { PupilsService } from './../pupils.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pupils',
  templateUrl: './edit-pupils.component.html',
  styleUrls: ['./edit-pupils.component.css']
})
export class EditPupilsComponent implements OnInit {
   id: string|null = null
   pupil: Pupil = new Pupil("", "", 0, "", "", {}, undefined)

   constructor(
      private pupilsService : PupilsService,
      private route: ActivatedRoute,
      private router: Router
   ) { }

   ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
         this.id = params.get("id")

         if(this.id) {
            this.getPupilById(this.id)
         }
      })
   }

   getPupilById(id: string): void {
      this.pupilsService.getPupilById(id).subscribe(pupil => this.pupil = pupil)
   }

   submit(): void {
      this.router.navigate(['/pupils'])
   }

}
