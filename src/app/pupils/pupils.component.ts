import { Router } from '@angular/router';
import { PupilsService } from './pupils.service';
import { Component, OnInit } from '@angular/core';
import { Pupil } from 'src/app/pupils/models/pupil';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.css']
})
export class PupilsComponent implements OnInit {
   pupils: Pupil[] = []

   constructor(
      private pupilsService: PupilsService,
      private router: Router
   ) { }

   ngOnInit(): void {
      this.getPupils()
   }

   getPupils(): void {
      this.pupilsService.getPupils().subscribe(pupils => this.pupils = pupils)
   }

   goToEdit(id: string): void {
      this.router.navigate(['/pupils/edit', id])
   }
}
